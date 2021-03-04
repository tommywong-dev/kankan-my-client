import React, { FC } from 'react'

import Header from './Header'
import Post from './Post'
import Buttons from './Buttons'
import Footer from './Footer'
import styles from '../../styles/MyPage/index.module.css';

const MyPageComponent: FC<PageDataType> = ({ data }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header username={data.username} description={data.description}/>
        <Buttons />
        <Post data={data} />
      </main>
      <Footer />
    </div>
  )
}

export type PageDataType = {
  data: {
    page: string,
    title: string,
    username: string,
    description: string,
    post: PostType
  }
}

type PostType = {
  header: string,
  title: string,
  subtitle: string,
  image_src: string,
  image_alt: string,
  content: string
}

export default MyPageComponent
