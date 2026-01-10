import { Metadata } from "next"
import { BookingWizard } from "@/components/booking/booking-wizard"

export const metadata: Metadata = {
    title: "Agendar Cita",
    description: "Reserva tu cita médica en línea de manera rápida y segura.",
}

export default function AppointmentsPage() {
    return (
        <div className="mx-auto max-w-7xl px-8 md:px-12 py-10 md:py-20">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Reserva tu Cita</h1>
                <p className="mt-4 text-muted-foreground">
                    Sigue los pasos para agendar tu consulta con nuestros especialistas.
                </p>
            </div>
            <BookingWizard />
        </div>
    )
}
