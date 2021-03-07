import React from 'react'
import Link from 'next/link';
import styles from '../../styles/MyPage/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      by
      <Link href="/">
        <a className={styles.link}>
          Kankan
        </a>
      </Link>
    </footer>
  )
}

export default Footer
