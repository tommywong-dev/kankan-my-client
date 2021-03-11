import React from 'react'
import Link from 'next/link';
import Button from '@material-ui/core/Button/Button'
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

import styles from '../../styles/Home/Main.module.css';

const Main = () => {
  const customs = customClasses();

  return (
    <main className={styles.main}>
      <p className={styles.one_link}>
        One{' '}
        <Link href="/">
          <a className={styles.link}>Link</a>
        </Link>{' '}
        to rule them all
      </p>

      <Link href="/signup">
        <Button color="primary" variant="contained" className={customs.get_started}>
          Sign up for free
        </Button>
      </Link>
    </main>
  )
}

const customClasses = makeStyles(theme => ({
  get_started: {
    padding: '1rem 2rem',
    borderRadius: '1rem',
    fontSize: '16px',
    letterSpacing: '2px',
    color: '#FAFAFA',
    backgroundColor: teal[500],
    '&:hover': {
      backgroundColor: teal[600]
    },
    '&:active': {
      backgroundColor: teal[500],
    }
  }
}))

export default Main
