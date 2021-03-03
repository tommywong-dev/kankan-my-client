import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      by
      <a
        className={styles.link}
        href="https://www.instagram.com/jnwong00/?hl=en"
        target="_blank"
      >
        Haze
      </a>
    </footer>
  )
}

export default Footer
