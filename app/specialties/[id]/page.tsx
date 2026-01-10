import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import * as Icons from "lucide-react"

import specialtiesData from "@/data/specialties.json"
import doctorsData from "@/data/doctors.json"

interface SpecialtyPageProps {
    params: Promise<{ id: string }>
}

export async function generateStaticParams() {
    return specialtiesData.map((specialty) => ({
        id: specialty.id,
    }))
}

export async function generateMetadata({ params }: SpecialtyPageProps): Promise<Metadata> {
    const { id } = await params
    const specialty = specialtiesData.find((s) => s.id === id)

    if (!specialty) {
        return { title: "Especialidad no encontrada" }
    }

    return {
        title: `${specialty.name} - Tratamientos y Especialistas`,
        description: specialty.description,
    }
}

export default async function SpecialtyPage({ params }: SpecialtyPageProps) {
    const { id } = await params
    const specialty = specialtiesData.find((s) => s.id === id)

    if (!specialty) notFound()

    const specialists = doctorsData.filter(d => d.specialtyId === id)
    const IconComponent = (Icons as any)[specialty.icon] || Icons.Activity

    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="mb-12 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <IconComponent className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">{specialty.name}</h1>
                <p className="max-w-[800px] text-lg text-muted-foreground">
                    {specialty.description} Contamos con la mejor tecnología y especialistas certificados para tu atención.
                </p>
            </div>

            <div className="mb-8 border-t pt-8">
                <h2 className="mb-6 text-2xl font-bold">Nuestros Especialistas en {specialty.name}</h2>

                {specialists.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {specialists.map((doctor) => (
                            <Card key={doctor.id} className="overflow-hidden">
                                <CardHeader className="flex flex-row gap-4 items-center">
                                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-2xl">👨‍⚕️</div>
                                    <div>
                                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                                        <div className="flex items-center text-amber-500 text-sm font-bold mt-1">
                                            <Star className="mr-1 h-3 w-3 fill-current" />
                                            {doctor.rating}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {doctor.bio}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Link href={`/doctors/${doctor.id}`} className="w-full">
                                        <Button variant="secondary" className="w-full">Ver Perfil</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-muted-foreground">No hay especialistas disponibles en este momento.</p>
                )}
            </div>

            <div className="rounded-xl border bg-primary/5 p-8 text-center">
                <h3 className="mb-2 text-xl font-semibold">¿Necesitas atención en {specialty.name}?</h3>
                <p className="mb-6 text-muted-foreground">Agenda tu cita hoy mismo y recibe el mejor tratamiento.</p>
                <Link href="/appointments">
                    <Button size="lg">Agendar Consulta</Button>
                </Link>
            </div>
        </div>
    )
}
