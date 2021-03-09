import React from 'react'

import Form from './Form';
import styles from '../../styles/Signup/index.module.css';
import Link from 'next/link';

const SignupComponent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1><Link href="/">Kankan</Link></h1>
        <h2>Sign up a Kankan account</h2>
        <Form />
      </main>
    </div>
  )
}



export default SignupComponent
