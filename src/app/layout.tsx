import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://janainacarvalho-adv.vercel.app"),
  title: {
    default: "Janaina Carvalho Advocacia | Direito de Família e Divórcio em Curitiba - PR",
    template: "%s | Janaina Carvalho Advocacia",
  },
  description:
    "Advocacia especializada em Direito de Família, Divórcio Consensual e Litigioso, Pensão Alimentícia, Guarda e Partilha de Bens em Curitiba/PR. OAB/PR 114.878. Mais de 10 anos de experiência com atendimento humanizado.",
  keywords: [
    "advogada de família curitiba",
    "advogado divórcio curitiba",
    "janaina carvalho advocacia",
    "pensão alimentícia curitiba",
    "guarda compartilhada curitiba pr",
    "partilha de bens divórcio",
    "dissolução união estável curitiba",
    "advocacia familiar parana",
  ],
  authors: [{ name: "Dra. Janaina Manhani de Carvalho" }],
  creator: "Dra. Janaina Manhani de Carvalho",
  publisher: "Janaina Carvalho Advocacia",
  alternates: {
    canonical: "https://janainacarvalho-adv.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://janainacarvalho-adv.vercel.app",
    title: "Janaina Carvalho Advocacia | Família e Divórcio em Curitiba - PR",
    description:
      "Advocacia humanizada e combativa em Direito de Família. Mais de 10 anos de experiência na proteção dos seus filhos e do seu patrimônio.",
    siteName: "Janaina Carvalho Advocacia",
    images: [
      {
        url: "/logo_semfundo_escritapreta_paramodoclaro.png",
        width: 1200,
        height: 630,
        alt: "Janaina Carvalho Advocacia de Família",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janaina Carvalho Advocacia | Família e Divórcio em Curitiba - PR",
    description:
      "Atuação humanizada e especializada em Direito de Família e Divórcio. Dra. Janaina Manhani de Carvalho OAB/PR 114.878.",
    images: ["/logo_semfundo_escritapreta_paramodoclaro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon_32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${philosopher.variable} ${mulish.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}