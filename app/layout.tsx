import type { Metadata } from "next";
import "./globals.css";
import {ChildProps} from "@/types";
import {Roboto, Space_Grotesk as SpaceGrotesk} from 'next/font/google'
import {ThemeProvider} from "next-themes";

const roboto = Roboto({
  subsets:['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})
const spaceGrotesk = SpaceGrotesk({
  subsets:['latin'],
  weight: ['300', '400', '500', '700'],
  variable:'--font-space-grotesk',
})
export const metadata: Metadata = {
  title: "Jamshid-Startup",
  description: "Startup development Next.js",
};

function RootLayout({children}:ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body suppressHydrationWarning
        className={` ${roboto.variable} ${spaceGrotesk.variable} overflow-x-hidden`}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
export default RootLayout;
