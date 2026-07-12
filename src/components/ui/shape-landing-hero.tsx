"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96] as [number, number, number, number],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Careers · We're Hiring",
    title1 = "Build the future of",
    title2 = "business software with us.",
    description = "We don't configure tools for clients. We build the real thing. If you want to work on custom AI software, React apps, and automations — you're in the right place.",
    children
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
    children?: React.ReactNode;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-dark py-20 pt-28">
            {/* Background Glow using brand warm accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B97A4B]/[0.05] via-transparent to-[#C88F62]/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Shapes using brand-aligned gradients */}
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#B97A4B]/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-[#C88F62]/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#6B554D]/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-[#B97A4B]/[0.12]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-white/[0.1]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 max-w-container mx-auto px-4 md:px-6 w-full text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
                    {/* Badge */}
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08]"
                    >
                        <Circle className="h-2 w-2 fill-[#B97A4B]" />
                        <span className="text-xs font-sans font-bold text-[#FBFAF1] tracking-wider uppercase">
                            {badge}
                        </span>
                    </motion.div>

                    {/* H1 Heading */}
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight leading-[1.08] text-white">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-[#C88F62] via-[#FBFAF1] to-[#B97A4B]"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full"
                    >
                        <p className="text-base sm:text-lg text-[#FBFAF1]/70 leading-relaxed max-w-[540px] font-sans font-normal mx-auto text-center">
                            {description}
                        </p>
                    </motion.div>

                    {/* Extra elements (stats, buttons) */}
                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full pt-4"
                    >
                        {children}
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }
