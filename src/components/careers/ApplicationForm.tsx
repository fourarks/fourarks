'use client'

import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Select from 'react-select'
import { Country, State, City } from 'country-state-city'
import { toast } from 'sonner'
import { Loader } from 'lucide-react'
import { careerSchema, type CareerFormData } from '../../schemas/careerSchema'
import { FormField } from '../ui/FormField'
import { RadioGroup } from '../ui/RadioGroup'
import { MagneticButton } from '../ui/MagneticButton'

// Select styles for dark background
const selectStylesDark = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: 'rgba(251, 250, 241, 0.05)',
    border: state.isFocused
      ? '1.5px solid #B97A4B'
      : '1.5px solid rgba(185, 122, 75, 0.2)',
    borderRadius: '12px',
    padding: '4px 4px',
    boxShadow: state.isFocused ? '0 0 0 3px rgba(185,122,75,0.15)' : 'none',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    color: '#FBFAF1',
    transition: 'all 200ms ease',
    '&:hover': { borderColor: '#B97A4B' },
    minHeight: '50px',
  }),
  placeholder: (base: any) => ({ ...base, color: 'rgba(251, 250, 241, 0.4)', fontSize: '15px' }),
  singleValue: (base: any) => ({ ...base, color: '#FBFAF1', fontSize: '15px' }),
  input: (base: any) => ({ ...base, color: '#FBFAF1' }),
  menu: (base: any) => ({
    ...base,
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#2D140A',
    border: '1px solid rgba(185,122,75,0.2)',
    zIndex: 50
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#B97A4B'
      : state.isFocused
        ? 'rgba(185, 122, 75, 0.12)'
        : 'transparent',
    color: state.isSelected ? '#fbfaf1' : 'rgba(251, 250, 241, 0.85)',
    fontSize: '15px',
    padding: '10px 16px',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#B97A4B'
    }
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (base: any) => ({ ...base, color: '#B97A4B' }),
}

interface ApplicationFormProps {
  selectedRole: string
  onClearSelectedRole: () => void
}


export function ApplicationForm({ selectedRole, onClearSelectedRole }: ApplicationFormProps) {
  const [stateOptions, setStateOptions] = useState<{ value: string; label: string }[]>([])
  const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([])
  const [cityFallback, setCityFallback] = useState(false)

  // Geo Data options setup
  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: `${c.flag ?? ''} ${c.name}`,
  }))

  const dialCodeOptions = Country.getAllCountries()
    .filter((c) => c.phonecode)
    .map((c) => ({
      value: `+${c.phonecode.replace(/\+/g, '')}`,
      label: `${c.flag ?? ''} +${c.phonecode.replace(/\+/g, '')}`,
      dialCode: `+${c.phonecode.replace(/\+/g, '')}`,
      isoCode: c.isoCode,
    }))

  const defaultDialCode = dialCodeOptions.find((d) => d.isoCode === 'IN')?.value || '+91'

  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      countryCode: defaultDialCode,
      phone: '',
      dob: '',
      gender: undefined,
      country: '',
      state: '',
      city: '',
      linkedin: '',
      role: (selectedRole as any) || undefined,
      experience: undefined,
      currentRole: '',
      portfolio: '',
      coverLetter: '',
      source: '',
      terms: undefined
    },
    mode: 'onBlur'
  })

  // Watch selected role from parent or update internally
  useEffect(() => {
    if (selectedRole) {
      setValue('role', selectedRole as any)
    }
  }, [selectedRole, setValue])

  // Watch cover letter for live character count
  const coverLetterText = watch('coverLetter') || ''
  const coverLetterCharCount = coverLetterText.length

  const handleCountryChange = (isoCode: string) => {
    setValue('country', isoCode)
    setValue('state', '')
    setValue('city', '')
    
    if (isoCode) {
      const states = State.getStatesOfCountry(isoCode).map((s) => ({
        value: s.isoCode,
        label: s.name,
      }))
      setStateOptions(states)
      setCityOptions([])
      setCityFallback(false)
      
      if (states.length === 0) {
        setValue('state', 'N/A')
        setCityFallback(true)
      }
    } else {
      setStateOptions([])
      setCityOptions([])
      setCityFallback(false)
    }
  }

  const handleStateChange = (stateCode: string) => {
    const countryCode = getValues('country')
    setValue('state', stateCode)
    setValue('city', '')
    
    if (countryCode && stateCode && stateCode !== 'N/A') {
      const cities = City.getCitiesOfState(countryCode, stateCode).map((c) => ({
        value: c.name,
        label: c.name,
      }))
      if (cities.length === 0) {
        setCityFallback(true)
        setCityOptions([])
      } else {
        setCityFallback(false)
        setCityOptions(cities)
      }
    } else {
      setCityOptions([])
      setCityFallback(false)
    }
  }

  const onSubmit = async (data: CareerFormData) => {
    try {
      const res = await fetch(import.meta.env.VITE_CONTACT_WEBHOOK || '', {
        method: 'POST',
        headers: { 
          'Content-Type': 'text/plain;charset=utf-8' 
        },
        body: JSON.stringify({
          formType:       'careers',
          fullName:       data.fullName,
          email:          data.email,
          countryCode:    data.countryCode,
          phone:          data.phone,
          dob:            data.dob,
          gender:         data.gender,
          country:        data.country,
          state:          data.state,
          city:           data.city,
          linkedin:       data.linkedin || 'Not provided',
          role:           data.role,
          experience:     data.experience,
          currentRole:    data.currentRole || 'Not provided',
          portfolio:      data.portfolio   || 'Not provided',
          coverLetter:    data.coverLetter,
          source:         data.source
        }),
      })

      const responseData = await res.json();

      if (res.ok && responseData.result === 'success') {
        toast.success("Application submitted! We'll review it within 48 hours.")
        reset()
        onClearSelectedRole()
        setStateOptions([])
        setCityOptions([])
        setCityFallback(false)
        
        // Scroll to the top of the form section on success
        const formSection = document.getElementById('application-form-section')
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch {
      toast.error('Submission failed. Please try again or email us at hello@fourarks.com', {
        duration: 5000
      })
    }
  }

  const onInvalidSubmit = (formErrors: any) => {
    const firstErrorKey = Object.keys(formErrors)[0]
    if (firstErrorKey) {
      const errorEl = document.getElementsByName(firstErrorKey)[0] || document.getElementById(firstErrorKey)
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit, onInvalidSubmit)} 
      className="flex flex-col gap-6 text-left w-full"
      noValidate
    >
      {/* SECTION A: Personal Info */}
      <div>
        <h3 className="font-serif text-[#B97A4B] text-lg font-bold border-b border-[#B97A4B]/20 pb-2 mb-6">
          Section A: Personal Info
        </h3>
        
        <div className="flex flex-col gap-6">
          <FormField label="Full Name" error={errors.fullName?.message} required>
            <input 
              type="text" 
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              placeholder="Your full name"
              {...register('fullName')}
            />
          </FormField>

          <FormField label="Email Address" error={errors.email?.message} required>
            <input 
              type="email" 
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="your@email.com"
              {...register('email')}
            />
          </FormField>

          {/* Phone Number Layout */}
          <div className="flex flex-col gap-1.5 w-full" id="phone-container">
            <label className="text-sm font-medium text-[#FBFAF1] tracking-wide">
              Phone Number <span className="text-[#B97A4B]">*</span>
            </label>
            <div className="flex gap-3">
              {/* Dial Code Selector (30%) */}
              <div className="w-[35%] min-w-[110px]">
                <Controller
                  name="countryCode"
                  control={control}
                  render={({ field }) => (
                    <Select
                      options={dialCodeOptions}
                      value={dialCodeOptions.find((d) => d.value === field.value)}
                      onChange={(option) => field.onChange(option?.value || '')}
                      styles={selectStylesDark}
                      isSearchable
                      placeholder="+91"
                    />
                  )}
                />
              </div>
              
              {/* Phone Input (70%) */}
              <div className="flex-1">
                <input 
                  type="tel" 
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="Your phone number"
                  {...register('phone')}
                />
              </div>
            </div>
            {errors.phone && (
              <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <span>⚠</span> {errors.phone.message}
              </p>
            )}
          </div>

          <FormField 
            label="Date of Birth" 
            error={errors.dob?.message} 
            required
            helper="We accept applications from candidates 18 years and older."
          >
            <input 
              type="date" 
              className={`form-input ${errors.dob ? 'error' : ''}`}
              {...register('dob')}
            />
          </FormField>

          <FormField label="Gender" error={errors.gender?.message} required>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'non-binary', label: 'Non-binary' },
                    { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.gender?.message}
                  variant="pill"
                />
              )}
            />
          </FormField>
        </div>
      </div>

      {/* SECTION B: Location */}
      <div className="mt-6">
        <h3 className="font-serif text-[#B97A4B] text-lg font-bold border-b border-[#B97A4B]/20 pb-2 mb-6">
          Section B: Location
        </h3>

        <div className="flex flex-col gap-6">
          {/* Country */}
          <div id="country-wrapper">
            <FormField label="Country" error={errors.country?.message} required>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    options={countryOptions}
                    value={countryOptions.find((c) => c.value === field.value) || null}
                    onChange={(option) => handleCountryChange(option ? option.value : '')}
                    styles={selectStylesDark}
                    isSearchable
                    placeholder="Select your country"
                  />
                )}
              />
            </FormField>
          </div>

          {/* State / Province */}
          <div id="state-wrapper">
            <FormField 
              label="State / Province" 
              error={errors.state?.message} 
              required={watch('country') ? (stateOptions.length > 0) : true}
            >
              <Controller
                name="state"
                control={control}
                render={({ field }) => {
                  const countrySelected = !!watch('country')
                  const hasStates = stateOptions.length > 0
                  
                  return (
                    <Select
                      options={stateOptions}
                      value={stateOptions.find((s) => s.value === field.value) || (field.value === 'N/A' ? { value: 'N/A', label: 'N/A' } : null)}
                      onChange={(option) => handleStateChange(option ? option.value : '')}
                      styles={selectStylesDark}
                      isSearchable
                      isDisabled={!countrySelected || !hasStates}
                      placeholder={!countrySelected ? "Select a country first" : !hasStates ? "N/A" : "Select your state"}
                    />
                  )
                }}
              />
            </FormField>
          </div>

          {/* District / City */}
          <div id="city-wrapper">
            {cityFallback ? (
              <FormField label="City / District" error={errors.city?.message} required>
                <input
                  type="text"
                  className={`form-input ${errors.city ? 'error' : ''}`}
                  placeholder="Enter your city"
                  {...register('city')}
                />
              </FormField>
            ) : (
              <FormField label="City / District" error={errors.city?.message} required>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => {
                    const stateSelected = !!watch('state')
                    return (
                      <Select
                        options={cityOptions}
                        value={cityOptions.find((c) => c.value === field.value) || null}
                        onChange={(option) => field.onChange(option ? option.value : '')}
                        styles={selectStylesDark}
                        isSearchable
                        isDisabled={!stateSelected}
                        placeholder={!stateSelected ? "Select a state first" : "Select your city / district"}
                      />
                    )
                  }}
                />
              </FormField>
            )}
          </div>

          {/* LinkedIn Profile */}
          <FormField label="LinkedIn Profile URL" error={errors.linkedin?.message}>
            <input 
              type="url" 
              className={`form-input ${errors.linkedin ? 'error' : ''}`}
              placeholder="https://linkedin.com/in/yourname"
              {...register('linkedin')}
            />
          </FormField>
        </div>
      </div>

      {/* SECTION C: Role & Experience */}
      <div className="mt-6">
        <h3 className="font-serif text-[#B97A4B] text-lg font-bold border-b border-[#B97A4B]/20 pb-2 mb-6">
          Section C: Role & Experience
        </h3>

        <div className="flex flex-col gap-6">
          {/* Role selection */}
          <FormField label="Role Applying For" error={errors.role?.message} required>
            <Controller
              name="role"
              control={control}
              render={({ field }) => {
                const options = [
                  { value: 'web-developer', label: 'Web Developer' },
                  { value: 'aiml-engineer', label: 'AI / ML Engineer' },
                  { value: 'ai-expert', label: 'AI Expert' },
                  { value: 'marketing-sponsorship', label: 'Marketing & Sponsorship' },
                  { value: 'video-editor', label: 'Video Editor' },
                  { value: 'social-media-manager', label: 'Social Media Manager' },
                  { value: 'other', label: 'Other / Open Application' }
                ];
                return (
                  <Select
                    options={options}
                    value={options.find((o) => o.value === field.value) || null}
                    onChange={(option) => field.onChange(option ? option.value : '')}
                    styles={selectStylesDark}
                    isSearchable={false}
                    placeholder="Select a role"
                  />
                )
              }}
            />
          </FormField>

          {/* Experience level */}
          <FormField label="Years of Experience" error={errors.experience?.message} required>
            <Controller
              name="experience"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  options={[
                    { value: '0-1', label: 'Fresher / Under 1 year' },
                    { value: '1-2', label: '1–2 years' },
                    { value: '2-5', label: '2–5 years' },
                    { value: '5-10', label: '5–10 years' },
                    { value: '10+', label: '10+ years' }
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.experience?.message}
                  variant="pill"
                />
              )}
            />
          </FormField>

          {/* Current role */}
          <FormField label="Current / Last Role Title" error={errors.currentRole?.message}>
            <input 
              type="text" 
              className={`form-input ${errors.currentRole ? 'error' : ''}`}
              placeholder="e.g. Frontend Developer at Startup"
              {...register('currentRole')}
            />
          </FormField>

          {/* Portfolio link */}
          <FormField 
            label="Portfolio / GitHub / Work Samples URL" 
            error={errors.portfolio?.message}
            helper="Link to your portfolio, GitHub, Behance, YouTube, or any work you're proud of."
          >
            <input 
              type="url" 
              className={`form-input ${errors.portfolio ? 'error' : ''}`}
              placeholder="https://yourportfolio.com or github.com/you"
              {...register('portfolio')}
            />
          </FormField>

          {/* Cover Letter */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-[#FBFAF1] tracking-wide">
                Cover Letter / Why 4ARKS? <span className="text-[#B97A4B]">*</span>
              </label>
              <span className={`text-xs font-sans transition-colors duration-200 ${
                coverLetterCharCount > 1000 
                  ? 'text-red-500 font-extrabold' 
                  : coverLetterCharCount > 900 
                    ? 'text-red-400 font-bold' 
                    : 'text-[#FBFAF1]/40'
              }`}>
                {coverLetterCharCount} / 1000
              </span>
            </div>
            <textarea 
              className={`form-input ${errors.coverLetter ? 'error' : ''}`}
              placeholder="Tell us why you want to join 4ARKS and what makes you a strong fit for this role. Be specific — what have you built, what do you want to build, and why here?"
              {...register('coverLetter')}
            />
            {errors.coverLetter && (
              <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                <span>⚠</span> {errors.coverLetter.message}
              </p>
            )}
          </div>

          {/* How did you hear about us? */}
          <FormField label="How did you hear about us?" error={errors.source?.message} required>
            <Controller
              name="source"
              control={control}
              render={({ field }) => {
                const options = [
                  { value: 'linkedin', label: 'LinkedIn' },
                  { value: 'instagram', label: 'Instagram / Social Media' },
                  { value: 'twitter', label: 'Twitter / X' },
                  { value: 'google', label: 'Google Search' },
                  { value: 'referral', label: 'Referred by someone' },
                  { value: 'job-board', label: 'Job board (Internshala, Naukri, etc.)' },
                  { value: 'other', label: 'Other' }
                ];
                return (
                  <Select
                    options={options}
                    value={options.find((o) => o.value === field.value) || null}
                    onChange={(option) => field.onChange(option ? option.value : '')}
                    styles={selectStylesDark}
                    isSearchable={false}
                    placeholder="Select an option"
                  />
                )
              }}
            />
          </FormField>
        </div>
      </div>

      {/* SECTION D: Agreement */}
      <div className="mt-4 flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer group text-left select-none">
          <input 
            type="checkbox" 
            className="mt-1 w-4 h-4 rounded border-[#B97A4B]/40 text-[#B97A4B] focus:ring-[#B97A4B] bg-transparent"
            {...register('terms')}
          />
          <span className="text-sm font-sans text-[#FBFAF1]/80 leading-relaxed group-hover:text-white transition-colors duration-200">
            I confirm that all information provided is accurate and I consent to 4ARKS processing my application data.
          </span>
        </label>
        {errors.terms && (
          <p className="text-xs text-red-400 flex items-center gap-1 mt-1 pl-7">
            <span>⚠</span> {errors.terms.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4 flex w-full md:justify-start">
        <MagneticButton className="w-full md:w-auto">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cta-button cta-button-orange w-full md:w-auto px-10 py-4.5 font-sans font-bold text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none"
          >
            {isSubmitting ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-1" />
                Submitting...
              </>
            ) : (
              'Submit Application →'
            )}
          </button>
        </MagneticButton>
      </div>
    </form>
  )
}
