import Head from "next/head"
import { route, type GetServerSidePropsContext } from "nextjs-routes"

export function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: route({ pathname: "/projects" }),
    },
  }
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
    </>
  )
}
