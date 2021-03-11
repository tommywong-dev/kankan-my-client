import React from 'react'

import Form from './Form';
import styles from '../../styles/Signup/index.module.css';
import Header from './Header';

const SignupComponent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Form />
      </main>
    </div>
  )
}



export default SignupComponent
