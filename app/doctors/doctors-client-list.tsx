"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CalendarCheck } from "lucide-react"

import doctorsData from "@/data/doctors.json"
import specialtiesData from "@/data/specialties.json"

export function DoctorsClientList() {
    const searchParams = useSearchParams()
    const specialtyFilter = searchParams.get("specialty")

    const filteredDoctors = specialtyFilter
        ? doctorsData.filter((d) => d.specialtyId === specialtyFilter)
        : doctorsData

    return (
        <>
            {/* Specialty Filter Pills */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
                <Link href="/doctors">
                    <Badge variant={!specialtyFilter ? "default" : "outline"} className="cursor-pointer px-4 py-2 text-sm">
                        Todos
                    </Badge>
                </Link>
                {specialtiesData.map((s) => (
                    <Link key={s.id} href={`/doctors?specialty=${s.id}`}>
                        <Badge
                            variant={specialtyFilter === s.id ? "default" : "outline"}
                            className="cursor-pointer px-4 py-2 text-sm"
                        >
                            {s.name}
                        </Badge>
                    </Link>
                ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                        <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                            <div className="aspect-[4/3] relative bg-muted overflow-hidden">
                                <img
                                    src={index % 2 === 0 ? "/images/doctors/doctor-female-1.png" : "/images/doctors/doctor-male-1.png"}
                                    alt={doctor.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3">
                                    <Badge className="bg-white/90 text-foreground backdrop-blur-sm border-0 shadow-sm">
                                        {doctor.specialtyName}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <div>
                                        <CardTitle className="mb-1">{doctor.name}</CardTitle>
                                        <CardDescription>{doctor.specialtyName}</CardDescription>
                                    </div>
                                    <div className="flex items-center text-amber-500 font-bold">
                                        <Star className="mr-1 h-4 w-4 fill-current" />
                                        {doctor.rating}
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                    {doctor.bio}
                                </p>
                                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                                    <div className="flex items-center rounded-md bg-secondary/10 px-2 py-1 text-secondary-foreground">
                                        <CalendarCheck className="mr-1 h-3 w-3" />
                                        {doctor.experience} años exp.
                                    </div>
                                    <div className="flex items-center rounded-md bg-primary/10 px-2 py-1 text-primary">
                                        ${doctor.price}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link href={`/doctors/${doctor.id}`} className="w-full">
                                    <Button className="w-full">Ver Perfil</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <h3 className="text-xl font-semibold">No se encontraron doctores</h3>
                        <p className="text-muted-foreground">Intenta con otra especialidad.</p>
                    </div>
                )}
            </div>
        </>
    )
}
