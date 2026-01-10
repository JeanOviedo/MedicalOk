import { Metadata } from "next"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
    title: "Preguntas Frecuentes",
    description: "Resuelve tus dudas sobre nuestros servicios.",
}

export default function FAQPage() {
    return (
        <div className="container py-10 md:py-20 max-w-3xl">
            <h1 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes</h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>¿Cómo agendo una cita?</AccordionTrigger>
                    <AccordionContent>
                        Es muy fácil: ve a la sección "Agendar Cita", selecciona la especialidad, el doctor de tu preferencia, y elige el horario que más te convenga.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>¿Aceptan seguros médicos?</AccordionTrigger>
                    <AccordionContent>
                        Sí, trabajamos con la mayoría de las aseguradoras nacionales e internacionales. Consulta la lista en recepción o llámanos.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>¿Qué hago si necesito cancelar?</AccordionTrigger>
                    <AccordionContent>
                        Puedes cancelar o reagendar tú cita hasta 24 horas antes sin costo alguno desde tu panel de usuario o llamando a nuestra línea de atención.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
