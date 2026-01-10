import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Términos y Condiciones",
}

export default function TermsPage() {
    return (
        <div className="container py-10 md:py-20 max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-6">Términos y Condiciones</h1>
            <div className="prose dark:prose-invert">
                <p>Última actualización: Enero 2026</p>
                <p>Bienvenido a MedicalOk. Al usar nuestros servicios, aceptas estos términos...</p>
                {/* Mock content */}
            </div>
        </div>
    )
}
