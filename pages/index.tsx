import Meta from '../components/Core/Meta';
import Home from '../components/Home';

export default function Index() {
  const title: string = 'Mifasol Malaysia | Haze';
  const username: string = '@mifasol_malaysia';
  const description: string = 'We sell quality sanitary pads';

  return (
    <>
      <Meta />
      <Home username={username} description={ description }/>
    </>
  )
}
