import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientIntlProvider } from "../components/ClientIntlProvider";
import "./globals.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Signature Academy - International Training Academy",
    template: "%s | Signature Academy",
  },
  description:
    "Empowering Tomorrow's Leaders, Today. World-class education rooted in values, creativity, and innovation. Professional diploma courses, expert instructors, and globally recognized certifications.",
  keywords: [
    "signature academy",
    "international training",
    "professional diplomas",
    "online courses",
    "business education",
    "leadership training",
    "marketing courses",
    "digital marketing",
    "professional development",
    "certified programs",
    "egypt education",
    "career advancement",
  ],
  authors: [{ name: "Signature Academy" }],
  creator: "Signature Academy",
  publisher: "Signature Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://signatureacademy.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ar-EG": "/ar-EG",
    },
  },
  openGraph: {
    title: "Signature Academy - International Training Academy",
    description:
      "Empowering Tomorrow's Leaders, Today. World-class education rooted in values, creativity, and innovation.",
    url: "https://signatureacademy.com",
    siteName: "Signature Academy",
    images: [
      {
        url: "/social-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Signature Academy Logo",
      },
      {
        url: "/social-images/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Signature Academy Logo Square",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Academy - International Training Academy",
    description:
      "Empowering Tomorrow's Leaders, Today. World-class education rooted in values, creativity, and innovation.",
    images: [
      {
        url: "/social-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Signature Academy Logo",
      },
    ],
    creator: "@signatureacademy",
    site: "@signatureacademy",
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Signature Academy",
    alternateName: "International Training Academy",
    description:
      "Empowering Tomorrow's Leaders, Today. World-class education rooted in values, creativity, and innovation.",
    url: "https://signatureacademy.com",
    logo: "https://signatureacademy.com/social-images/og-image.png",
    image: "https://signatureacademy.com/social-images/og-image.png",
    telephone: "0227757515",
    email: "info@signatureacademyedu.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "٢ / أأ. عبدالرحمن رشدي الدور الارضي مكتب ١  بجوار مسجد ابو بكر الصديق بجوار قسم النزهه",
      addressCountry: "EG",
    },
    sameAs: [
      "https://www.facebook.com/signatureacademy",
      "https://www.linkedin.com/company/signatureacademy",
      "https://www.instagram.com/signatureacademy",
    ],
    foundingDate: "2009",
    numberOfEmployees: "50-100",
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    serviceType: [
      "Professional Training",
      "Online Education",
      "Diploma Courses",
      "Business Education",
      "Leadership Training",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 21001:2018 Certification",
        credentialCategory: "Quality Management",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001:2015 Certification",
        credentialCategory: "Quality Management",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Facebook Open Graph additional tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter Card additional tags */}
        <meta name="twitter:image:alt" content="Signature Academy Logo" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientIntlProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ClientIntlProvider>
      </body>
    </html>
  );
}
