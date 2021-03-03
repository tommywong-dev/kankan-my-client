import Head from 'next/head'
import Home from '../components/Home.component';

export default function Index() {
  const title: string = 'Mifasol Malaysia | Haze';
  const username: string = '@mifasol_malaysia';
  const description: string = 'We sell quality sanitary pads';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Home username={username} description={ description }/>
    </>
  )
}
