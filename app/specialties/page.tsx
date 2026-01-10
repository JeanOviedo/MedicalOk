import { Metadata } from "next"
import Link from "next/link"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import * as Icons from "lucide-react"

import specialtiesData from "@/data/specialties.json"

export const metadata: Metadata = {
    title: "Especialidades Médicas",
    description: "Descubre nuestra amplia gama de especialidades médicas.",
}

export default function SpecialtiesPage() {
    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Nuestras Especialidades</h1>
                <p className="mt-4 text-muted-foreground">
                    Atención integral en diversas áreas de la medicina.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {specialtiesData.map((specialty) => {
                    const IconComponent = (Icons as any)[specialty.icon] || Icons.Activity
                    return (
                        <Link key={specialty.id} href={`/specialties/${specialty.id}`}>
                            <Card className="h-full transition-all hover:bg-muted/50 hover:shadow-md cursor-pointer">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <IconComponent className="h-6 w-6" />
                                    </div>
                                    <CardTitle>{specialty.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        {specialty.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
