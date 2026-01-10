import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import clinicData from "@/data/clinic.json"
import { Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl px-8 md:px-12 grid grid-cols-12 items-center h-24">
                {/* Logo Section - Col 3 */}
                <div className="col-span-3 flex justify-start">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transform hover:scale-105 transition-transform">
                            {clinicData.name}
                        </span>
                    </Link>
                </div>

                {/* Navigation Section - Col 6 (Perfect Center) */}
                <div className="col-span-6 flex justify-center">
                    <nav className="hidden gap-8 md:flex items-center">
                        <Link
                            href="/doctors"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:scale-105 transform duration-200"
                        >
                            Doctores
                        </Link>
                        <Link
                            href="/specialties"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:scale-105 transform duration-200"
                        >
                            Especialidades
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:scale-105 transform duration-200"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:scale-105 transform duration-200"
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>

                {/* Actions Section - Col 3 */}
                <div className="col-span-3 flex justify-end gap-3 items-center">
                    <ThemeToggle />
                    <Link href="/appointments" className="hidden sm:block">
                        <Button className="font-semibold shadow-md shadow-primary/20">Agendar Cita</Button>
                    </Link>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
