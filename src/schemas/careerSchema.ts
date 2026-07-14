import { z } from 'zod'

const today = new Date()
const minAge18 = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())

export const careerSchema = z.object({
  fullName:    z.string()
                 .min(2, 'Name must be at least 2 characters')
                 .max(80, 'Name too long')
                 .regex(/^[a-zA-Z\s'\-]+$/, 'Please enter your full name (letters only)'),

  email:       z.string()
                 .email('Please enter a valid email address'),

  countryCode: z.string()
                 .min(1, 'Please select a country code'),

  phone:       z.string()
                 .regex(/^\d{6,15}$/, 'Enter a valid phone number (digits only, 6–15 digits)'),

  dob:         z.string()
                 .refine((val) => {
                   const date = new Date(val)
                   return !isNaN(date.getTime()) && date <= minAge18
                 }, 'You must be at least 18 years old to apply'),

  gender:      z.enum(['male', 'female', 'non-binary', 'prefer-not-to-say'] as const, {
                 message: 'Please select your gender',
               }),

  country:     z.string().min(1, 'Please select your country'),
  state:       z.string().min(1, 'Please select your state / province'),
  city:       z.string().min(1, 'Please enter or select your city / district'),

  linkedin:    z.string()
                 .optional()
                 .or(z.literal(''))
                 .refine((val) => !val || /^https:\/\/(www\.)?linkedin\.com\/in\/.+/.test(val), {
                   message: 'Please enter a valid LinkedIn URL (linkedin.com/in/...)',
                 }),

  role:        z.enum([
                 'web-developer',
                 'aiml-engineer',
                 'ai-expert',
                 'marketing-sponsorship',
                 'video-editor',
                 'graphic-designer',
                 'social-media-manager',
                 'other'
               ] as const, { message: "Please select the role you're applying for" }),

  experience:  z.enum(['0-1', '1-2', '2-5', '5-10', '10+'] as const, {
                 message: 'Please select your experience level',
               }),

  currentRole: z.string().max(100).optional().or(z.literal('')),

  portfolio:   z.string()
                 .optional()
                 .or(z.literal(''))
                 .refine((val) => !val || val.startsWith('https://'), {
                   message: 'Please enter a valid URL starting with https://',
                 }),

  coverLetter: z.string()
                 .min(80, 'Please write at least 80 characters — tell us about yourself')
                 .max(1000, 'Please keep your cover letter under 1000 characters'),

  source:      z.string().min(1, 'Please let us know how you found us'),

  terms:       z.literal(true, {
                 message: 'Please confirm to proceed',
               }),
})

export type CareerFormData = z.infer<typeof careerSchema>
