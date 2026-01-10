import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad",
}

export default function PrivacyPage() {
    return (
        <div className="container py-10 md:py-20 max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
            <div className="prose dark:prose-invert">
                <p>En MedicalOk nos tomamos muy en serio la privacidad de tus datos médicos...</p>
                {/* Mock content */}
            </div>
        </div>
    )
}
