import Link from "next/link"
import clinicData from "@/data/clinic.json"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className="space-y-4 flex flex-col items-center">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{clinicData.name}</span>
                        </Link>
                        <p className="text-sm text-center text-muted-foreground mx-auto max-w-xs">
                            {clinicData.description}
                        </p>
                        <div className="flex space-x-4 justify-center">
                            <Link href={clinicData.socials.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href={clinicData.socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href={clinicData.socials.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href={clinicData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/doctors" className="text-muted-foreground hover:text-primary transition-colors">
                                    Nuestros Doctores
                                </Link>
                            </li>
                            <li>
                                <Link href="/specialties" className="text-muted-foreground hover:text-primary transition-colors">
                                    Especialidades
                                </Link>
                            </li>
                            <li>
                                <Link href="/appointments" className="text-muted-foreground hover:text-primary transition-colors">
                                    Agendar Cita
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                                    Blog de Salud
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                                    Privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold">Contacto</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>{clinicData.contact.address}</li>
                            <li>{clinicData.contact.city}, {clinicData.contact.country}</li>
                            <li>{clinicData.contact.phone}</li>
                            <li>{clinicData.contact.email}</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {clinicData.name}. Creado por Jean Oviedo Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
