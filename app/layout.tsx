import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ThemeMeBabe - Mood-Based VS Code Theme Switcher ✨",
  description:
    "Transform your coding experience with AI-powered mood detection. Your theme changes automatically based on your coding energy - focused, tired, neutral, or frustrated. Made with ❤️ by Diksha.",
  keywords: ["VS Code", "theme", "extension", "mood", "coding", "developer tools", "AI", "productivity"],
  authors: [{ name: "Diksha", url: "https://github.com/dikshaa2909" }],
  creator: "Diksha",
  publisher: "ThemeMeBabe",
  applicationName: "ThemeMeBabe",
  category: "Developer Tools",

  // Open Graph for social media previews
  openGraph: {
    title: "ThemeMeBabe - Mood-Based VS Code Theme Switcher ✨",
    description:
      "Transform your coding experience with AI-powered mood detection. Your theme changes automatically based on your coding energy.",
    type: "website",
    locale: "en_US",
    siteName: "ThemeMeBabe",
    images: [
      {
        url: "/og-image.png", // You can add this image later
        width: 1200,
        height: 630,
        alt: "ThemeMeBabe - Mood-Based VS Code Theme Switcher",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "ThemeMeBabe - Mood-Based VS Code Theme Switcher ✨",
    description:
      "Transform your coding experience with AI-powered mood detection. Your theme changes automatically based on your coding energy.",
    creator: "@diiksshaaaa",
    images: ["/og-image.png"],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verification and other meta tags
  other: {
    "theme-color": "#EC4899",
    "color-scheme": "dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "ThemeMeBabe",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
