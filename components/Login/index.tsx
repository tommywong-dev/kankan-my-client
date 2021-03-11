import React from 'react'

import Header from './Header';
import Form from './Form';
import styles from '../../styles/Login/index.module.css';

const LoginComponent = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <Form />
      </main>
    </div>
  )
}

export default LoginComponent
