import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import { DashboardLayout } from "./DashboardLayout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Techtivity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </>
  )
}
