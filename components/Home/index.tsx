import React from 'react'
import styles from '../../styles/Home.module.css'

import Header from './Header'
import Post from './Post'
import Buttons from './Buttons'
import Footer from './Footer'

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
