import React from 'react'
import Link from 'next/link';

import styles from '../../styles/Login/OrSignup.module.css';

const OrSignup = () => {
  return (
    <div className={styles.or}>
      <span>Or</span>
      <p>
        <Link href="/signup">Create an account</Link>
      </p>
    </div>
  )
}

export default OrSignup
