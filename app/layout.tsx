import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ThemeMeBabe - Mood-Based VS Code Theme Switcher",
  description:
    "A VS Code extension that changes your theme based on your coding mood — focused, tired, neutral, or frustrated. Mood-based vibes, automatically.",
  generator: "v0.dev",
  keywords: ["VS Code", "theme", "extension", "mood", "coding", "developer tools"],
  authors: [{ name: "Diksha" }],
  openGraph: {
    title: "ThemeMeBabe - Mood-Based VS Code Theme Switcher",
    description: "Transform your coding experience with mood-based theme switching",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
