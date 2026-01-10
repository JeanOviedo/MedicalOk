import Link from "next/link"
import Image from "next/image"
import doctorsData from "@/data/doctors.json"
import { Star, MapPin, CalendarCheck } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedDoctors() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-8 md:px-12 space-y-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        Nuestro Equipo
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-foreground">
                        Especialistas De Clase Mundial
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {doctorsData.slice(0, 3).map((doctor, index) => (
                        <Card key={doctor.id} className="overflow-hidden border-0 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl group">
                            <div className="aspect-[4/5] relative bg-muted overflow-hidden">
                                <img
                                    src={index % 2 === 0 ? "images/doctors/doctor-female-1.png" : "images/doctors/doctor-male-1.png"}
                                    alt={doctor.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm hover:bg-white border-0 shadow-sm">
                                        {doctor.specialtyName}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <CardHeader className="p-5 pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{doctor.name}</h3>
                                        <div className="flex items-center text-amber-500 text-sm font-bold mt-1">
                                            <Star className="mr-1 h-3.5 w-3.5 fill-current" />
                                            {doctor.rating} <span className="text-muted-foreground font-normal ml-1">({doctor.reviews} reseñas)</span>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-5 pt-2">
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                                    {doctor.bio}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-4">
                                    <div className="flex items-center">
                                        <CalendarCheck className="mr-1.5 h-4 w-4 text-primary" />
                                        {doctor.experience} años exp.
                                    </div>
                                    <div className="font-semibold text-primary text-sm bg-primary/10 px-2 py-1 rounded">
                                        ${doctor.price}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-5 pt-0">
                                <Link href={`/doctors/${doctor.id}`} className="w-full">
                                    <Button className="w-full font-semibold shadow-sm" variant="default">Agendar Cita</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
