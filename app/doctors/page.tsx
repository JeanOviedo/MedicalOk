import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Nuestros Doctores",
    description: "Conoce a nuestro equipo de especialistas médicos.",
}

import { Suspense } from "react"
import { DoctorsClientList } from "./doctors-client-list"

export default function DoctorsPage() {
    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Encuentra a tu Especialista</h1>
                <p className="mt-4 text-muted-foreground">
                    Explora nuestro directorio médico y filtra por especialidad.
                </p>
            </div>

            <Suspense fallback={<div className="text-center py-10">Cargando directorio...</div>}>
                <DoctorsClientList />
            </Suspense>
        </div>
    )
}
