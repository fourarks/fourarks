import React from 'react'

export function InfoPanel() {
  return (
    <div className="bg-dark-deep/40 border border-[#B97A4B]/20 rounded-2xl p-8 sm:p-10 text-left flex flex-col gap-8 h-full">
      <div>
        <h3 className="font-serif text-2xl font-bold text-white mb-6">What happens next?</h3>
        
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <span className="font-sans font-bold text-sm text-[#B97A4B] mt-0.5">01</span>
            <div>
              <h4 className="font-sans font-semibold text-white text-base">Application Review</h4>
              <p className="font-sans text-sm text-[#FBFAF1]/70 mt-1 leading-relaxed">
                We review every application personally within 48 hours. No ATS filters, no rejection bots.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-sans font-bold text-sm text-[#B97A4B] mt-0.5">02</span>
            <div>
              <h4 className="font-sans font-semibold text-white text-base">20-Min Intro Call</h4>
              <p className="font-sans text-sm text-[#FBFAF1]/70 mt-1 leading-relaxed">
                If there's alignment, we'll reach out to schedule a short 20-minute video intro call to chat about expectations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-sans font-bold text-sm text-[#B97A4B] mt-0.5">03</span>
            <div>
              <h4 className="font-sans font-semibold text-white text-base">Test Project</h4>
              <p className="font-sans text-sm text-[#FBFAF1]/70 mt-1 leading-relaxed">
                We share a small paid test project relevant to your role. You showcase your skill in practical conditions.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="font-sans font-bold text-sm text-[#B97A4B] mt-0.5">04</span>
            <div>
              <h4 className="font-sans font-semibold text-white text-base">Offer & Onboarding</h4>
              <p className="font-sans text-sm text-[#FBFAF1]/70 mt-1 leading-relaxed">
                We extend a formal offer, set up onboarding, and you officially join the team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#B97A4B]/20 pt-8 mt-auto">
        <p className="font-sans text-sm text-[#FBFAF1]/60">Also feel free to reach us on WhatsApp:</p>
        <a 
          href="https://wa.me/919201799245" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-[#B97A4B] hover:text-[#C88F62] transition-colors font-sans font-bold text-base mt-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.467 0 9.911-4.43 9.913-9.884.002-2.643-1.017-5.127-2.87-6.985-1.853-1.857-4.324-2.878-6.966-2.879-5.48 0-9.92 4.43-9.923 9.885-.001 1.83.479 3.618 1.39 5.187l-.992 3.626 3.738-.975zM17.15 13.91c-.28-.14-1.656-.81-1.912-.9-.256-.09-.443-.14-.629.14-.186.28-.722.9-.885 1.08-.163.18-.326.2-.606.06-.28-.14-1.18-.43-2.247-1.39-.83-.74-1.39-1.65-1.55-1.93-.163-.28-.018-.43.122-.57.126-.12.28-.32.42-.48.14-.16.186-.28.28-.46.09-.18.046-.34-.02-.48-.066-.14-.629-1.51-.862-2.07-.226-.54-.475-.47-.629-.48-.152-.006-.326-.008-.5-.008-.174 0-.46.06-.7.32-.24.26-.916.89-.916 2.18s.94 2.54 1.07 2.71c.13.18 1.85 2.82 4.48 3.96.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.656-.67 1.89-1.33.232-.66.232-1.22.163-1.33-.07-.11-.256-.2-.536-.34z"/>
          </svg>
          Chat with us &rarr;
        </a>
      </div>

      <div className="border-t border-[#B97A4B]/20 pt-8">
        <p className="font-sans italic text-base text-[#FBFAF1]/70 leading-relaxed">
          &ldquo;We read every application personally. No ATS. No rejection bots.&rdquo;
        </p>
        <span className="font-sans font-bold text-xs text-[#B97A4B] uppercase tracking-wider block mt-2">&mdash; 4ARKS Team</span>
      </div>
    </div>
  )
}
