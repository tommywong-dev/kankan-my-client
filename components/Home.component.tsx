import React from 'react'
import styles from '../styles/Home.module.css'

import Header from './Header.component'
import Post from './Post.component'
import Buttons from './Buttons.component'
import Footer from './Footer.component'

const Home = ({username, description}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header username={username} description={description}/>
        <Buttons />
        <Post />
      </main>
      <Footer />
    </div>
  )
}

export default Home
