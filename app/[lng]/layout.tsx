import type { Metadata } from "next";
import "./globals.css";
import {ChildProps} from "@/types";
import {Roboto, Space_Grotesk as SpaceGrotesk} from 'next/font/google'
import {ThemeProvider} from "next-themes";
import {languages} from "@/i18n/settings";
import {dir} from "i18next";

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

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}))
}

export const metadata: Metadata = {
  title: "Jamshid-Startup",
  description: "Startup development Next.js",
};

interface Props extends ChildProps{
  params:{lng:string}
}
function RootLayout({children, params:{lng}}:Props) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning >
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
