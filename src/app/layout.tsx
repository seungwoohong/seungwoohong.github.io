import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/data/portfolio";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://seungwoohong.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "소프트웨어 엔지니어",
    "Software Engineer",
    "프론트엔드 개발자",
    "프론트엔드 리드",
    "Senior Frontend Engineer",
    "Frontend Lead",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "PixiJS",
    "ThreeJS",
    "WebGL",
    "Apollo Client",
    "GCP",
    "Kubernetes",
    "CI/CD",
    "Web Vitals",
    "Design Systems",
    "WMS",
    "물류 플랫폼",
    "데이터 시각화",
    "Tappytoon",
    "기술 블로그",
    "멘토링",
    "오픈소스",
    profile.name,
    profile.nameEn,
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0812" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
