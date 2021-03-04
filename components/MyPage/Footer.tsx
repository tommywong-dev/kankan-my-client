import React from 'react'
import styles from '../../styles/MyPage/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      by
      <a
        className={styles.link}
        href="mailto:tommywong.dev@gmail.com"
        target="_blank"
      >
        Kankan
      </a>
    </footer>
  )
}

export default Footer
