import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MedicalOk | Tu salud, nuestra prioridad",
    template: "%s | MedicalOk",
  },
  description: "Plantilla médica profesional para clínicas y consultorios. Reserva tu cita en línea.",
  keywords: ["medicina", "clínica", "salud", "doctores", "citas médicas"],
  authors: [{ name: "MedicalOk Team" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://medicalok.demo",
    title: "MedicalOk",
    description: "Plataforma de salud integral.",
    siteName: "MedicalOk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
