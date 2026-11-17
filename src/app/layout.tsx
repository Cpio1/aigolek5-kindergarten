import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { getDictionary, defaultLocale } from "@/content";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  // cyrillic-ext: Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І әріптері үшін міндетті
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  applicationName: "№5 «Айгөлек»",
  formatDetection: { telephone: false },
  openGraph: {
    title: t.meta.title,
    description: t.meta.description,
    locale: "kk_KZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#fffaf0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className={`${nunito.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
