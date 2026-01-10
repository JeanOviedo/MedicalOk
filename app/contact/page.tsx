import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import clinicData from "@/data/clinic.json"

export const metadata: Metadata = {
    title: "Contacto",
    description: "Contáctanos para más información o agendar tu cita.",
}

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Contáctanos</h1>
                <p className="text-lg text-muted-foreground">
                    Estamos aquí para atenderte. Envíanos un mensaje o visítanos en nuestras instalaciones.
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
                <div>

                    <div className="grid gap-6">
                        <Card>
                            <CardContent className="flex items-start gap-4 p-6">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Ubicación</h3>
                                    <p className="text-muted-foreground">{clinicData.contact.address}</p>
                                    <p className="text-muted-foreground">{clinicData.contact.city}, {clinicData.contact.country}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-start gap-4 p-6">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Teléfono & WhatsApp</h3>
                                    <p className="text-muted-foreground">{clinicData.contact.phone}</p>
                                    <p className="text-muted-foreground">{clinicData.contact.whatsapp}</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex items-start gap-4 p-6">
                                <Clock className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Horarios</h3>
                                    <p className="text-muted-foreground">Lunes - Viernes: {clinicData.hours.weekdays}</p>
                                    <p className="text-muted-foreground">Sábado: {clinicData.hours.saturday}</p>
                                    <p className="text-muted-foreground">Domingo: {clinicData.hours.sunday}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="rounded-xl border bg-card p-8 shadow-sm">
                    <h2 className="mb-6 text-2xl font-semibold">Envíanos un mensaje</h2>
                    <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                                <Input id="name" placeholder="Tu nombre" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <Input id="email" type="email" placeholder="tu@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
                            <Input id="subject" placeholder="Consulta general" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                            <Textarea id="message" placeholder="¿En qué podemos ayudarte?" className="min-h-[120px]" />
                        </div>
                        <Button type="submit" className="w-full">Enviar Mensaje</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
