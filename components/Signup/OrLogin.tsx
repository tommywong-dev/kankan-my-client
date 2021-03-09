import React from 'react'
import Link from 'next/link';

import styles from '../../styles/Signup/OrLogin.module.css';

const OrLogin = () => {
  return (
    <div className={styles.or}>
      <span>Or</span>
      <p>
        <Link href="/login">Login to an existing account</Link>
      </p>
    </div>
  )
}

export default OrLogin
