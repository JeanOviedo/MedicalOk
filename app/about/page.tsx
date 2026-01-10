import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description: "Conoce más sobre MedicalOk y nuestra misión.",
}

export default function AboutPage() {
    return (
        <div className="container py-10 md:py-20 max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre MedicalOk</h1>
            <div className="prose dark:prose-invert">
                <p className="text-lg text-muted-foreground mb-4">
                    En MedicalOk, nos dedicamos a transformar la experiencia médica mediante la tecnología y la empatía.
                </p>
                <p>
                    Fundada en 2024, nuestra plataforma conecta a pacientes con los mejores especialistas de la región,
                    garantizando un acceso rápido, seguro y confiable a servicios de salud de alta calidad.
                </p>
            </div>
        </div>
    )
}
