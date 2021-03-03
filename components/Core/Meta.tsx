import React from 'react'
import Head from 'next/head';

const Meta = ({ title = 'Kankan', description = 'Kankan connects all your relevant links into a single clean link' }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.png" />
      <meta name="description" content={description} />
      <meta name="keywords" content="Kankan, link, decentralised" />
      <meta name="author" content="Kankan" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default Meta
