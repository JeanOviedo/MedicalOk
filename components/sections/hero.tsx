"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
                style={{ backgroundImage: "url('images/hero/hero-bg.png')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/80 to-background" />

            <div className="relative z-10 w-full max-w-7xl px-8 md:px-12 flex flex-col items-center text-center mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl space-y-6"
                >
                    <div className="inline-flex items-center rounded-full border bg-background/50 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm transition-colors hover:bg-background/80">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        Líderes en Tecnología Médica
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Tu salud en manos de <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Expertos Certificados
                        </span>
                    </h1>

                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                        Accede a una red premium de especialistas, diagnósticos precisos y atención personalizada.
                        <span className="block mt-2 font-medium text-foreground">Tu bienestar es nuestra prioridad.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                    <Link href="/appointments">
                        <Button size="lg" className="h-12 px-8 gap-2 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                            <Calendar className="h-5 w-5" />
                            Agendar Cita
                        </Button>
                    </Link>
                    <Link href="/doctors">
                        <Button size="lg" variant="outline" className="h-12 px-8 gap-2 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80">
                            <Stethoscope className="h-5 w-5" />
                            Ver Especialistas
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating cards for visual interest */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16 w-full max-w-5xl"
                >
                    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border bg-background/50 shadow-2xl backdrop-blur-sm">
                        <img
                            src="images/hero/hero-bg.png"
                            alt="Instalaciones Médicas"
                            className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white text-left">
                            <h3 className="font-bold text-xl">Instalaciones de Vanguardia</h3>
                            <p className="text-sm opacity-90">Equipados con la mejor tecnología para tu diagnóstico.</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
        </section>
    )
}
