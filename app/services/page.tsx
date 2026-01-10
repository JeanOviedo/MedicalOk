import { Metadata } from "next"
import { FeaturedSpecialties } from "@/components/sections/featured-specialties"

export const metadata: Metadata = {
    title: "Nuestros Servicios",
    description: "Conoce la gama completa de servicios médicos que ofrecemos.",
}

export default function ServicesPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-8 md:px-12 text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Servicios Médicos</h1>
                <p className="text-muted-foreground">Tecnología avanzada para tu bienestar.</p>
            </div>
            <FeaturedSpecialties />
        </div>
    )
}
