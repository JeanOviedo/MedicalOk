import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, MapPin, CheckCircle } from "lucide-react"

import doctorsData from "@/data/doctors.json"

interface DoctorPageProps {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return doctorsData.map((doctor) => ({
        id: doctor.id,
    }))
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
    const { id } = await params
    const doctor = doctorsData.find((d) => d.id === id)

    if (!doctor) {
        return {
            title: "Doctor no encontrado",
        }
    }

    return {
        title: `${doctor.name} - ${doctor.specialtyName}`,
        description: doctor.bio,
    }
}

export default async function DoctorPage({ params }: DoctorPageProps) {
    const { id } = await params
    const doctor = doctorsData.find((d) => d.id === id)

    if (!doctor) {
        notFound()
    }

    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="grid gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr]">
                <div className="space-y-6">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl bg-muted flex items-center justify-center group">
                        <img
                            src={Number(doctor.id) % 2 === 0 ? "../images/doctors/doctor-female-1.png" : "../images/doctors/doctor-male-1.png"}
                            alt={doctor.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-4 rounded-xl border p-6 shadow-sm">
                        <h3 className="font-semibold text-lg border-b pb-2">Información de Consulta</h3>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Costo Consulta</span>
                            <span className="font-bold">${doctor.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Experiencia</span>
                            <span className="font-medium">{doctor.experience} años</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Idiomas</span>
                            <span className="font-medium text-right">{doctor.languages.join(", ")}</span>
                        </div>
                        <Link href="/appointments">
                            <Button className="w-full mt-4" size="lg">Agendar Cita</Button>
                        </Link>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{doctor.specialtyName}</Badge>
                            <div className="flex items-center text-amber-500 text-sm font-bold">
                                <Star className="mr-1 h-4 w-4 fill-current" />
                                {doctor.rating} ({doctor.reviews} reseñas)
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-4">{doctor.name}</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {doctor.bio}
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-xl bg-muted/30 p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                                Especialidad
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Experto en diagnóstico y tratamiento de patologías asociadas a {doctor.specialtyName.toLowerCase()}.
                                Utiliza tecnología de última generación para asegurar los mejores resultados.
                            </p>
                        </div>
                        <div className="rounded-xl bg-muted/30 p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Clock className="mr-2 h-5 w-5 text-primary" />
                                Horarios de Atención
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {doctor.availability.map(day => (
                                    <Badge key={day} variant="outline" className="bg-background">{day}</Badge>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-4">
                                * Sujeto a disponibilidad en tiempo real.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">Sobre mí</h3>
                        <p className="text-muted-foreground">
                            Comprometido con la salud de mis pacientes. Mi enfoque se basa en la prevención y en tratamientos mínimamente invasivos
                            cuando es posible. Me mantengo actualizado constantemente con los últimos avances médicos en {doctor.specialtyName}.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
