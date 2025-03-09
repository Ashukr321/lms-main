import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/pageCompo/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TanStackProvider } from "@/config/TanstackProvider";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "EduOrbit LMS - Modern Learning Management System",
  description:
    " EduOrbit is a comprehensive learning management system for students and instructors. Access courses, track progress, and engage in interactive learning.",
  keywords:
    " EduOrbit LMS, learning management system, online courses, education platform, e-learning",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: " EduOrbit LMS - Modern Learning Management System",
    description:
      "Comprehensive learning management system for students and instructors",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: " EduOrbit LMS - Modern Learning Management System",
    description:
      "Comprehensive learning management system for students and instructors",
  },
  alternates: {
    canonical: "https://eduorbit-lms.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TanStackProvider>
              <Navbar />
              <div className="px-8">{children}</div>
            </TanStackProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
