import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_DOMAIN = "https://www.estudiomercadoochoa.com.ar";
const SITE_NAME = "Estudio Jurídico Mercado Ochoa Abogados";
const LOGO_PATH = "/ChatGPT Image 1 oct 2025, 11_38_06 p.m..png";
const absoluteUrl = (path: string) => new URL(path, BASE_DOMAIN).toString();

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Estudio Jurídico Mercado Ochoa Abogados | Abogados en Neuquén",
    template: "%s | Estudio Jurídico Mercado Ochoa Abogados",
  },
  description:
    "Abogados en Neuquén y Río Negro con asesoría integral en derecho civil, familia, laboral, ambiental y accidentes de tránsito.",
  metadataBase: new URL(BASE_DOMAIN),
  icons: {
    icon: LOGO_PATH,
    shortcut: LOGO_PATH,
    apple: LOGO_PATH,
  },
  openGraph: {
    title: "Estudio Jurídico Mercado Ochoa Abogados | Abogados en Neuquén",
    description:
      "Abogados en Neuquén y Río Negro con asesoría integral en derecho civil, familia, laboral, ambiental y accidentes de tránsito.",
    url: BASE_DOMAIN,
    siteName: SITE_NAME,
    images: [
      {
        url: absoluteUrl(LOGO_PATH),
        alt: "Estudio Jurídico Mercado Ochoa Abogados - Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE_NAME,
    description:
      "Abogados en Neuquén y Río Negro. Soluciones legales claras y efectivas en derecho civil, contratos, familia, sucesiones, derecho laboral, derecho ambiental y accidentes de tránsito.",
    url: BASE_DOMAIN,
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(LOGO_PATH),
    telephone: "+5492994728756",
    email: "mercadoochoaabogados@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Córdoba 466",
      addressLocality: "Neuquén Capital",
      addressRegion: "Neuquén",
      addressCountry: "AR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Neuquén Capital",
      },
      {
        "@type": "State",
        name: "Río Negro",
      },
    ],
    serviceType: [
      "Derecho Civil",
      "Contratos",
      "Familia y Sucesiones",
      "Derecho Laboral",
      "Derecho Ambiental",
      "Accidentes de Tránsito",
      "Asesoría Integral 360°",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Áreas de práctica",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Civil y Contratos en Neuquén",
            description:
              "Asesoramos en redacción y revisión de contratos, incumplimientos y responsabilidad civil.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Familia y Sucesiones en Neuquén",
            description:
              "Atendemos divorcios, cuota alimentaria, régimen de comunicación, uniones convivenciales, compensación económica, filiación y tramitación integral de sucesiones.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Abogado Laboral en Neuquén",
            description:
              "Defensa de trabajadores y asesoramiento a empresas: despidos, diferencias salariales, registración deficiente, accidentes y enfermedades laborales (ART) y acuerdos.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Derecho Ambiental en Neuquén",
            description:
              "Prevención de daños, reclamos por afectación ambiental y cumplimiento normativo para particulares y pymes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Accidentes de Tránsito en Neuquén",
            description:
              "Gestión integral de reclamos a aseguradoras, tasación de lesiones y daños materiales, acuerdos y juicios.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asesoría Integral 360°",
            description:
              "Diagnóstico legal completo para personas y negocios: evaluación de riesgos, diseño de contratos, cumplimiento regulatorio y prevención de conflictos.",
          },
        },
      ],
    },
    sameAs: [
      "https://instagram.com/mercadoochoaabogados",
      "https://www.linkedin.com/in/ariel-a-mercado-ochoa-11b05a2a0/",
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <meta name="theme-color" content="#011640" />
        <meta name="google-site-verification" content="r7W9ddaE6k6m_UMpV_uQ07D1q9RKFwN5Ex6mRLPuLyU" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased transition-all duration-300 bg-transparent`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
