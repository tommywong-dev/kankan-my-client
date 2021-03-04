import React from 'react'
import { GetServerSideProps } from 'next';

import Meta from '../components/Core/Meta';
import MyPageComponent from '../components/MyPage';

const MyPage = ({ data }) => {
  return (
    <>
      <Meta />
      <MyPageComponent data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page: string | string[] = context.params.id

  // TODO: fetch data from server
  const data = {
    page,
    title: 'Mifasol Malaysia | Haze',
    username: '@mifasol_malaysia',
    description: 'We sell quality sanitary pads',
    post: {
      header: 'Recent',
      title: 'Daily routine to keep your pubic area clean',
      subtitle: 'Little did you know',
      image_src: 'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.0-9/150890006_114680453955675_2295700691486158754_o.png?_nc_cat=100&ccb=3&_nc_sid=730e14&_nc_eui2=AeHC_yLgzwfpAF5dXyjQsvwDiF48LZGv7H2IXjwtka_sfbynhPm5_u7519OrKkAGNipliunaShTaoAqHtSBpe9gp&_nc_ohc=4kVopaqdGUMAX_tUsq1&_nc_oc=AQkeTHL-n0_gSprxwqueFuAPgDXeM1KWoQ2nx53A64OZNjM1cVT37LuLHpCw1wYjioc&_nc_ht=scontent.fpen1-1.fna&oh=9689e917e4050500766d09b11df77fe7&oe=6064ABEA',
      image_alt: 'daily routine to keep your pubic area clean',
      content: 'Hi, my name is cibai'
    }
  }

  return {
    props: { data }
  }
}

export default MyPage
