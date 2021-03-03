import React from 'react'
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      by
      <a
        className={styles.link}
        href="mailto:tommywong.dev@gmail.com"
        target="_blank"
      >
        Haze
      </a>
    </footer>
  )
}

export default Footer
