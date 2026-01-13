# MedicalOk - Premium Medical Clinic Template

MedicalOk es una plantilla frontend moderna, rápida y totalmente responsive diseñada para clínicas, hospitales y consultorios médicos. Construida con **Next.js 16**, **Tailwind CSS v4** y **Framer Motion**, esta plantilla ofrece una experiencia de usuario de primera clase.


![DienteOk Preview](https://jeanoviedo.com/img/medical.jpg)

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## 🚀 Características Principales

### 🎨 Diseño y UI Premium
-   **Layout Centrado y Simétrico**: Estrategia de diseño `max-w-7xl mx-auto` para garantizar una visualización perfecta en pantallas grandes.
-   **Estética Moderna**: Uso de degradados, sombras suaves, bordes redondeados y efectos glassmorphism.
-   **Modo Oscuro/Claro**: Soporte nativo y persistente para temas oscuros y claros.
-   **Animaciones Fluidas**: Integración de Framer Motion para transiciones suaves en Hero, Cards y navegación.

### 🩺 Funcionalidades Clave
-   **Directorio de Doctores**: Listado filtrable por especialidad con perfiles detallados.
-   **Perfiles de Doctores**: Páginas individuales con biografía, experiencia, costos, idiomas y horarios (imágenes generadas por IA de alta calidad).
-   **Especialidades**: Catálogo visual de servicios médicos con iconos personalizados.
-   **Agendamiento de Citas**: Flujo simulado de reserva de citas (Wizard step-by-step).
-   **Blog y Noticias**: Sección de artículos para content marketing.
-   **Páginas Informativas**: Contacto, Nosotros, Servicios, FAQ, Privacidad y Términos.

### 🛠️ Stack Tecnológico
-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Componentes**: [Radix UI](https://www.radix-ui.com/) (primitivas accesibles) + Shadcn/ui inspiration.
-   **Iconos**: [Lucide React](https://lucide.dev/)
-   **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
-   **Utilidades**: `clsx`, `tailwind-merge`

## 📦 Instalación y Uso

### Prerrequisitos
-   Node.js 18+ instalado.
-   npm, yarn, pnpm o bun.

### Pasos
1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/JeanOviedo/MedicalOk.git
    cd medicalok
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Visita `http://localhost:3000` para ver la aplicación.

4.  **Construir para producción**:
    ```bash
    npm run build
    npm start
    ```

## � Despliegue en GitHub Pages

Este proyecto ya está configurado para desplegarse automáticamente en GitHub Pages.

1.  **Sube tu código a GitHub**.
2.  Ve a **Settings > Pages** en tu repositorio.
3.  En **Build and deployment > Source**, selecciona **GitHub Actions**.
4.  Al hacer push a la rama `main`, la acción se ejecutará y tu sitio estará vivo en minutos.

Consulta la guía detallada en `deployment_guide.md` si necesitas más ayuda.

## 📂 Estructura del Proyecto

```
/medicalok
├── app/                  # Rutas y páginas (Next.js App Router)
│   ├── appointments/     # Página de Agendamiento
│   ├── blog/             # Blog y artículos
│   ├── contact/          # Página de Contacto
│   ├── doctors/          # Directorio y Perfiles ([id])
│   ├── services/         # Servicios
│   ├── specialties/      # Especialidades
│   ├── layout.tsx        # Layout principal (Header/Footer)
│   └── globals.css       # Estilos globales y Tailwind Config
├── components/           # Componentes React
│   ├── booking/          # Componentes del flujo de citas
│   ├── layout/           # Header, Footer, Nav
│   ├── sections/         # Secciones de Landing (Hero, Featured)
│   └── ui/               # Componentes base (Button, Card, Input...)
├── data/                 # Datos simulados (JSON)
│   ├── clinic.json       # Info de la clínica
│   ├── doctors.json      # Base de datos de doctores
│   └── ...
├── lib/                  # Utilidades (utils.ts)
└── public/               # Imágenes y estáticos
    └── images/           # Assets generados
```

## ⚙️ Personalización

### Información de la Clínica
Edita el archivo `data/clinic.json` para cambiar el nombre, dirección, redes sociales y horarios de tu clínica.

```json
{
  "name": "MedicalOk",
  "contact": {
    "city": "Montería",
    "country": "Colombia"
  }
}
```

### Colores y Tema
Tailwind v4 utiliza variables CSS nativas. Puedes ajustar la paleta de colores en `app/globals.css` dentro de la directiva `@theme`.

### Doctores y Especialidades
Agrega o modifica los archivos `data/doctors.json` y `data/specialties.json`. Las imágenes de los doctores se asignan automáticamente basándose en el ID (par/impar) en el componente, pero puedes modificar esta lógica en `app/doctors/[id]/page.tsx` para usar campos de imagen específicos.

## 📄 Licencia
Este proyecto es una plantilla de demostración creada por **Jean Oviedo**. Todos los derechos reservados.
