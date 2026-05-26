import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias por tu consulta",
  description:
    "Confirmación de consulta recibida por Estudio Jurídico Mercado Ochoa Abogados.",
  alternates: {
    canonical: "/gracias",
  },
};

export default function Gracias() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#054035] font-montserrat mb-4">
          ¡Gracias por tu consulta!
        </h1>
        <p className="text-[#0A594B] font-lato leading-relaxed mb-6">
          La recibimos correctamente. Te responderemos a la brevedad con una evaluación inicial y próximos pasos.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white" style={{ background: '#054035' }}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}


