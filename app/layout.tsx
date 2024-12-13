import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { Noise, Footer, FuturisticHero, Name } from "./components";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexdunlop.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Alex Dunlop",
    template: "%s | Alex Dunlop",
  },
  description: "Software engineer, builder, AI optimist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased flex flex-col fixed w-screen tracking-tight bg-neutral-100 h-screen">
          <div className="h-8 w-full" />
          <div className="flex flex-1">
            <div className="w-8 h-full relative">
              <Footer />
            </div>
            <div className="relative overflow-hidden flex-1 border border-neutral-500">
              <FuturisticHero />
              <Noise />
              <div className="flex h-full flex-col justify-between p-8 transparent text-neutral-500">
                <div className="space-y-1">
                  <Name />
                  <div className="space-x-1.5">
                    <Link
                      href="/"
                      className="text-xs text-blue-500 hover:text-blue-700"
                    >
                      Home
                    </Link>
                    <Link
                      href="/n/prompts"
                      className="text-xs text-blue-500 hover:text-blue-700"
                    >
                      Prompts
                    </Link>
                  </div>
                </div>
                <main className="w-full gap-2 flex flex-col">{children}</main>
              </div>
            </div>
            <div className="w-8 h-full" />
          </div>
          <div className="h-8 w-full" />
        </body>
      </html>
    </ViewTransitions>
  );
}
