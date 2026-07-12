import React, { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
const Logo = "/logo.png";
import GradientButton from "./button-1";

const servicesList = [
  {
    icon: "🤖",
    iconBg: "#3D1E0E",
    route: "/services/ai-crm",
    name: "AI CRM",
    tagline: "Your sales pipeline — automated, scored, and owned by you.",
    replaces: ["HubSpot", "Salesforce", "Zoho"]
  },
  {
    icon: "💬",
    iconBg: "#3D1E0E",
    route: "/services/whatsapp-call-automation",
    name: "WhatsApp & Call Automation",
    tagline: "24/7 AI agents. No per-message fees. Ever.",
    replaces: ["Wati", "Interakt", "Yellow.ai"]
  },
  {
    icon: "⚡",
    iconBg: "#3D1E0E",
    route: "/services/workflow-automation",
    name: "Workflow Automation",
    tagline: "Kill your Zapier bill. Own your automation stack.",
    replaces: ["Zapier", "Make.com", "n8n Cloud"]
  },
  {
    icon: "🌐",
    iconBg: "#3D1E0E",
    route: "/services/website-development",
    name: "Website Development",
    tagline: "Custom React/Next.js — no platform subscriptions required.",
    replaces: ["Webflow", "Wix", "WordPress"]
  },
  {
    icon: "🎨",
    iconBg: "#3D1E0E",
    route: "/services/branding-design",
    name: "Branding & Design",
    tagline: "Logo, identity, design system — all files yours, no Canva needed.",
    replaces: ["Canva Pro", "Adobe CC"]
  }
];

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <div className="flex justify-center w-full py-4 px-4 fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className={`flex items-center justify-between px-6 py-3 rounded-full w-full max-w-4xl relative z-10 pointer-events-auto transition-all duration-300 ${isScrolled
          ? "bg-dark-deep/92 backdrop-blur-xl border border-bg/25 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
          : "bg-dark-deep/75 backdrop-blur-md border border-bg/15 shadow-xl"
        }`}>
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <motion.div
              className="font-sans font-black tracking-tighter text-2xl text-bg mr-2 uppercase"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img className="w-28" src={Logo} alt="4ARKS logo" />
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div
                  key={item.path}
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-sans font-medium transition-colors drop-shadow-xs relative pb-1 ${
                      location.pathname.startsWith('/services')
                        ? "text-[#B97A4B] font-semibold border-b-2 border-[#B97A4B]"
                        : "text-bg/85 hover:text-bg"
                    }`}
                  >
                    {item.name}
                  </Link>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/4 top-full mt-2 bg-[#2D140A] border border-[#B97A4B]/20 rounded-b-2xl p-2 w-[520px] shadow-[0_24px_60px_rgba(0,0,0,0.5)] z-50 pointer-events-auto"
                      >
                        {/* Dropdown Content */}
                        <div className="flex flex-col space-y-1">
                          {servicesList.map((service) => (
                            <Link
                              key={service.route}
                              to={service.route}
                              onClick={() => setIsDropdownOpen(false)}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#B97A4B]/8 border-l-[3px] border-transparent hover:border-[#B97A4B] transition-all duration-150 group text-left"
                            >
                              <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-[#3D1E0E]">
                                {service.icon}
                              </div>
                              <div className="flex-1 min-w-0 space-y-1">
                                <div className="text-[15px] font-sans font-bold text-[#FBFAF1] group-hover:text-white transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-[13px] font-sans font-normal text-[#FBFAF1]/55 leading-tight">
                                  {service.tagline}
                                </div>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                  {service.replaces.map((r) => (
                                    <span key={r} className="text-[11px] font-sans font-medium text-[#FBFAF1]/70 border border-[#B97A4B]/30 px-2 py-0.5 rounded-full bg-transparent">
                                      {r}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Dropdown Footer Strip */}
                        <div className="border-t border-[#B97A4B]/15 mt-2 pt-2 px-3 pb-1 flex items-center justify-between text-[13px] font-sans">
                          <span className="text-[#FBFAF1]/50">Not sure what you need?</span>
                          <Link
                            to="/get-started"
                            onClick={() => setIsDropdownOpen(false)}
                            className="text-[#B97A4B] hover:text-white font-bold transition-colors flex items-center"
                          >
                            Get a Free Stack Audit →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.08 }}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-sans font-medium transition-colors drop-shadow-xs ${location.pathname === item.path
                      ? "text-accent font-semibold"
                      : "text-bg/85 hover:text-bg"
                    }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GradientButton
            onClick={() => navigate('/get-started')}
            width="170px"
            height="38px"
            className="text-[13px] font-sans font-semibold text-white cursor-pointer"
            style={{
              '--color-background': '#B97A4B',
              '--color-text': '#FFFFFF',
              '--glow-start': '#FFFFFF',
              '--glow-mid': '#000000',
              '--border-inset': '2.5px',
              '--inner-radius': '47px'
            } as React.CSSProperties}
          >
            Get Started <ArrowRight size={14} className="ml-1.5" />
          </GradientButton>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex items-center p-1 text-bg hover:text-accent transition-colors"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Open mobile menu"
        >
          <Menu className="h-6 w-6 text-bg" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-dark z-50 pt-24 px-6 md:hidden flex flex-col justify-between pb-12 pointer-events-auto"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 text-bg hover:text-accent transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close mobile menu"
            >
              <X className="h-7 w-7 text-bg" />
            </motion.button>

            <div className="flex flex-col space-y-6 overflow-y-auto max-h-[60vh] pr-2">
              <span className="text-label text-accent font-semibold block mb-2">Navigation</span>
              {navItems.map((item, i) => {
                if (item.name === "Services") {
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 + 0.1 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-3"
                    >
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`text-3xl font-serif text-left w-full flex items-center justify-between ${
                          location.pathname.startsWith('/services') ? "text-[#B97A4B]" : "text-bg"
                        }`}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: isMobileServicesOpen ? 90 : 0 }}
                          className="text-lg text-accent"
                        >
                          →
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 flex flex-col space-y-3 overflow-hidden border-l border-[#B97A4B]/20"
                          >
                            {/* Overview Route */}
                            <Link
                              to="/services"
                              className={`text-lg font-sans ${location.pathname === '/services' ? "text-accent" : "text-bg/70"}`}
                              onClick={toggleMenu}
                            >
                              📁 Overview
                            </Link>
                            
                            {servicesList.map(s => (
                              <Link
                                key={s.route}
                                to={s.route}
                                className={`text-lg font-sans flex items-center gap-2 ${location.pathname === s.route ? "text-accent" : "text-bg/70"}`}
                                onClick={toggleMenu}
                              >
                                <span>{s.icon}</span>
                                <span>{s.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-3xl font-serif block ${location.pathname === item.path ? "text-accent" : "text-bg"
                        }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              exit={{ opacity: 0, y: 20 }}
              className="pt-6 space-y-4"
            >
              <GradientButton
                onClick={() => {
                  toggleMenu();
                  navigate('/get-started');
                }}
                width="100%"
                height="56px"
                className="text-base font-sans font-semibold text-white cursor-pointer"
                style={{
                  '--color-background': '#B97A4B',
                  '--color-text': '#FFFFFF',
                  '--glow-start': '#FFFFFF',
                  '--glow-mid': '#000000',
                  '--border-inset': '3px',
                  '--inner-radius': '47px'
                } as React.CSSProperties}
              >
                Get Started Free →
              </GradientButton>
              <div className="text-center text-text-muted text-sm font-sans">
                fourarksofficial@gmail.com
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
export default Navbar1
