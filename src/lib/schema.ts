import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://janainacarvalho-adv.vercel.app/#legalservice",
    name: OFFICE_INFO.name,
    alternateName: "Janaina Carvalho Advocacia de Família",
    description:
      "Advocacia especializada em Direito de Família, Divórcio Consensual e Litigioso, Pensão Alimentícia, Guarda e Partilha de Bens em Curitiba/PR e em todo o Brasil.",
    url: "https://janainacarvalho-adv.vercel.app",
    telephone: "+5541996214317",
    priceRange: "$$",
    image: "https://janainacarvalho-adv.vercel.app/logo_semfundo_escritapreta_paramodoclaro.png",
    logo: "https://janainacarvalho-adv.vercel.app/logo_semfundo_escritapreta_paramodoclaro.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Ébano Pereira, 60 - Sl 2004 - Centro",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      postalCode: "80410-240",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -25.4290,
      longitude: -49.2730,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.whatsappUrl,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.oab}, ${LAWYER_PROFILE.specialties}`,
      },
    ],
  };
}