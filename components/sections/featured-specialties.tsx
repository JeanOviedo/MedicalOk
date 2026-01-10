import Link from "next/link"
import specialtiesData from "@/data/specialties.json"
import * as Icons from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function FeaturedSpecialties() {
    return (
        <section className="bg-muted/50 py-20">
            <div className="mx-auto max-w-7xl px-8 md:px-12 space-y-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary-foreground">
                        Especialidades
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                        Cobertura Médica Integral
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Contamos con expertos en las áreas más críticas de la salud moderna.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {specialtiesData.slice(0, 6).map((specialty) => {
                        // Dynamic Icon Component
                        const IconComponent = (Icons as any)[specialty.icon] || Icons.Activity

                        return (
                            <Card key={specialty.id} className="transition-all hover:shadow-lg hover:-translate-y-1 text-center group border-muted hover:border-primary/50">
                                <CardHeader className="flex flex-col items-center pt-8">
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <IconComponent className="h-8 w-8" />
                                    </div>
                                    <CardTitle>{specialty.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="mb-6 line-clamp-2">
                                        {specialty.description}
                                    </CardDescription>
                                    <Link href={`/specialties/${specialty.id}`}>
                                        <Button variant="link" className="text-primary p-0 h-auto font-semibold group-hover:underline">
                                            Ver especialistas
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="flex justify-center">
                    <Link href="/specialties">
                        <Button variant="outline" size="lg">Ver todas las especialidades</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
