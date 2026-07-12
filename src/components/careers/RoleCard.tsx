import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export interface Role {
  id: string
  title: string
  badge: string
  stack: string
  description: string
  skills: string[]
}

interface RoleCardProps {
  role: Role
  onApply: (roleId: string) => void
}

export function RoleCard({ role, onApply }: RoleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white border border-[#2D140A]/10 hover:border-l-[3px] hover:border-l-[#B97A4B] rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left hover:shadow-[0_12px_24px_-4px_rgba(45,20,10,0.08)] transition-[border-color,border-width,box-shadow] duration-200 min-h-[320px]"
    >
      <div>
        <div className="flex justify-between items-start gap-4 mb-4">
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#2D140A]">
            {role.title}
          </h4>
          <span className="font-sans font-bold text-xs uppercase tracking-wider bg-[#B97A4B]/10 text-[#B97A4B] px-3 py-1.5 rounded-full shrink-0">
            {role.badge}
          </span>
        </div>

        <div className="text-xs text-[#2D140A]/60 font-sans font-semibold mb-4 tracking-wide uppercase">
          Stack: {role.stack}
        </div>

        <p className="text-[#2D140A]/85 font-sans text-[15px] leading-relaxed mb-6 line-clamp-3">
          {role.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-6">
          {role.skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-[11px] font-sans font-bold text-[#2D140A]/70 border border-[#2D140A]/15 px-2.5 py-1 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        <button
          onClick={() => onApply(role.id)}
          className="group inline-flex items-center gap-1.5 text-[#B97A4B] hover:text-[#C88F62] font-sans font-extrabold text-sm tracking-wide cursor-pointer transition-colors duration-200"
        >
          Apply for this role
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  )
}
