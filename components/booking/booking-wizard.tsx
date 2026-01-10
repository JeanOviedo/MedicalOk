"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import specialtiesData from "@/data/specialties.json"
import doctorsData from "@/data/doctors.json"
import appointmentsData from "@/data/appointments.json"

interface BookingState {
    specialtyId: string | null
    doctorId: string | null
    date: string | null
    time: string | null
}

const steps = [
    { id: 1, name: "Especialidad" },
    { id: 2, name: "Doctor" },
    { id: 3, name: "Horario" },
    { id: 4, name: "Confirmar" },
]

export function BookingWizard() {
    const [step, setStep] = React.useState(1)
    const [formData, setFormData] = React.useState<BookingState>({
        specialtyId: null,
        doctorId: null,
        date: null,
        time: null,
    })

    // Derived state
    const selectedSpecialty = specialtiesData.find((s) => s.id === formData.specialtyId)
    const selectedDoctor = doctorsData.find((d) => d.id === formData.doctorId)

    // Filter doctors by specialty
    const availableDoctors = doctorsData.filter(d => d.specialtyId === formData.specialtyId)

    // Get mocks slots for selected doctor
    const doctorSlots = formData.doctorId
        ? (appointmentsData.availability as any)[formData.doctorId]
        : null

    const handleNext = () => {
        if (step < 4) setStep(step + 1)
    }

    const handleBack = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSelectSpecialty = (id: string) => {
        setFormData({ ...formData, specialtyId: id, doctorId: null, date: null, time: null })
        setTimeout(() => setStep(2), 200)
    }

    const handleSelectDoctor = (id: string) => {
        setFormData({ ...formData, doctorId: id, date: null, time: null })
        setTimeout(() => setStep(3), 200)
    }

    const handleSelectSlot = (date: string, time: string) => {
        setFormData({ ...formData, date, time })
    }

    return (
        <div className="mx-auto max-w-4xl space-y-8">
            {/* Progress Bar */}
            <div className="relative">
                <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-muted" />
                <div
                    className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-primary transition-all duration-300"
                    style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />
                <div className="relative flex justify-between">
                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-2 bg-background px-2">
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                                    step >= s.id
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-muted-foreground text-muted-foreground"
                                )}
                            >
                                {step > s.id ? <Check className="h-4 w-4" /> : s.id}
                            </div>
                            <span className="text-xs font-medium text-muted-foreground">{s.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
                        >
                            {specialtiesData.map((s) => (
                                <Card
                                    key={s.id}
                                    className={cn(
                                        "cursor-pointer transition-all hover:border-primary hover:shadow-md",
                                        formData.specialtyId === s.id && "border-primary bg-primary/5"
                                    )}
                                    onClick={() => handleSelectSpecialty(s.id)}
                                >
                                    <CardContent className="flex flex-col items-center p-6 text-center">
                                        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                                            {/* Icon placeholder since we don't have dynamic imports here easily */}
                                            <span className="font-bold text-xl">{s.name[0]}</span>
                                        </div>
                                        <h3 className="font-semibold">{s.name}</h3>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            {availableDoctors.length > 0 ? (
                                availableDoctors.map((d) => (
                                    <Card
                                        key={d.id}
                                        className={cn(
                                            "cursor-pointer transition-all hover:border-primary hover:shadow-md",
                                            formData.doctorId === d.id && "border-primary bg-primary/5"
                                        )}
                                        onClick={() => handleSelectDoctor(d.id)}
                                    >
                                        <CardContent className="flex items-center gap-4 p-6">
                                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-xl">👨‍⚕️</div>
                                            <div>
                                                <h3 className="font-semibold">{d.name}</h3>
                                                <p className="text-xs text-muted-foreground">Rating: {d.rating} ⭐</p>
                                                <p className="text-sm font-bold text-primary">${d.price}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                <p className="col-span-full text-center text-muted-foreground">No hay doctores disponibles para esta especialidad.</p>
                            )}
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <h3 className="text-center font-semibold text-lg">
                                Disponibilidad de {selectedDoctor?.name}
                            </h3>
                            {!doctorSlots ? (
                                <p className="text-center text-muted-foreground">No hay horarios disponibles.</p>
                            ) : (
                                <div className="grid gap-6 md:grid-cols-3">
                                    {Object.entries(doctorSlots).map(([date, times]) => (
                                        <div key={date} className="rounded-lg border p-4">
                                            <div className="mb-3 flex items-center gap-2 font-medium">
                                                <CalendarIcon className="h-4 w-4 text-primary" />
                                                {date}
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {(times as string[]).map((time) => (
                                                    <Button
                                                        key={time}
                                                        variant={formData.date === date && formData.time === time ? "default" : "outline"}
                                                        size="sm"
                                                        className="w-full"
                                                        onClick={() => handleSelectSlot(date, time)}
                                                    >
                                                        {time}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="mx-auto max-w-md space-y-6 text-center"
                        >
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <Check className="h-10 w-10" />
                            </div>
                            <h2 className="text-2xl font-bold">¡Cita Confirmada!</h2>
                            <div className="rounded-lg border bg-card p-6 text-left shadow-sm">
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Especialidad</span>
                                        <span className="font-medium">{selectedSpecialty?.name}</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Doctor</span>
                                        <span className="font-medium">{selectedDoctor?.name}</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="text-muted-foreground">Fecha</span>
                                        <span className="font-medium">{formData.date}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-primary">
                                        <span>Hora</span>
                                        <span>{formData.time}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Hemos enviado los detalles a tu correo electrónico.
                            </p>
                            <Button onClick={() => window.location.href = "/"}>Volver al Inicio</Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="flex justify-between pt-8">
                {step > 1 && step < 4 && (
                    <Button variant="outline" onClick={handleBack} disabled={step === 1}>
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Atrás
                    </Button>
                )}
                <div className="ml-auto">
                    {step === 3 && (
                        <Button
                            onClick={handleNext}
                            disabled={!formData.date || !formData.time}
                        >
                            Confirmar Cita
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
