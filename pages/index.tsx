import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify 2.0</title>
        <meta name="description" content="Spotify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline text-red-500">
    Hello world!
  </h1>
    </>
  )
}
