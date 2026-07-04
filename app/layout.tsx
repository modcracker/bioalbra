import type {Metadata, Viewport} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "BioAlbra Consortium | Peer-Reviewed Biological Science & Soil Repositories",
    template: "%s | BioAlbra Consortium"
  },
  description: "A professional scientific database, earth-sustaining biological exploration matrix, and mycorrhizal soil-remediation advisor.",
  metadataBase: new URL("https://www.bioalbra.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BioAlbra Consortium | Peer-Reviewed Biological Science & Soil Repositories",
    description: "A professional scientific database, earth-sustaining biological exploration matrix, and mycorrhizal soil-remediation advisor.",
    url: "https://www.bioalbra.com",
    siteName: "BioAlbra Consortium",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/bioalbra/1200/630",
        width: 1200,
        height: 630,
        alt: "BioAlbra Consortium Earth Sustaining Biological Sciences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioAlbra Consortium | Peer-Reviewed Biological Science & Soil Repositories",
    description: "A professional scientific database, earth-sustaining biological exploration matrix, and mycorrhizal soil-remediation advisor.",
    images: ["https://picsum.photos/seed/bioalbra/1200/630"],
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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased bg-stone-50 text-stone-900 min-h-screen selection:bg-emerald-100 selection:text-emerald-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
