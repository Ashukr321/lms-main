import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/pageCompo/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "EduOrbit LMS - Modern Learning Management System",
  description: " EduOrbit is a comprehensive learning management system for students and instructors. Access courses, track progress, and engage in interactive learning.",
  keywords: " EduOrbit LMS, learning management system, online courses, education platform, e-learning",
  openGraph: {
    title: " EduOrbit LMS - Modern Learning Management System",
    description: "Comprehensive learning management system for students and instructors",
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: " EduOrbit LMS - Modern Learning Management System",
    description: "Comprehensive learning management system for students and instructors",
  },
  alternates: {
    canonical: 'https://eduorbit-lms.com'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
