import { Inter } from "next/font/google"
import "./globals.css"
// import Script from "next/script"
// import { Analytics } from "@vercel/analytics/react"
import { NextThemesProvider } from "@/components/providers/NextThemesProvider"
import { HeartFilledIcon } from "@radix-ui/react-icons"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = "force-dynamic"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta property="og:title" content="2day4cast" />
      <meta property="og:sitename" content="2day4cast" />
      <meta property="og:author" content="Hoàng Xuân Lâm" />
      <meta property="og:url" content="https://2day4cast.vercel.app/"/>
      <meta property="og:description" content="Hà Nội Web App dự báo thời tiết bao gồm đầy đủ thông tin về khí tượng học | Hand-crafted with ❤️ by Xuân Lâm"/>
      <meta property="og:type" content="weather-app-next-js"/>
      <meta name="apple-mobile-web-app-status-bar" content="#68B5E9" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <body
        className={`${inter.className}, container mx-auto flex min-h-screen flex-col px-[1rem] antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black md:px-[2rem]`}
      >
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-grow">{children}</main>
          <footer className="py-4">
            <div
              className="group flex items-center justify-center gap-1 text-neutral-400 dark:text-neutral-600"
              aria-hidden={true}
            >
              <span>Hand-crafted</span>
              <span>with</span>
              <HeartFilledIcon className="h-4 w-4 text-red-500" />
              <span>by <a className="hover:text-blue-700 hover:underline" href="https://github.com/hoangxuanlam2007" target="_blank" rel="noreferrer">Xuân Lâm</a></span>
            </div>
          </footer>
        </NextThemesProvider>
        {/* <Script
          strategy={"beforeInteractive"}
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=Function.prototype`}
        /> */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
