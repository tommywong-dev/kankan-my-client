import React from 'react'
import Link from 'next/link';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../styles/Home/NavBar.module.css';
import { teal } from '@material-ui/core/colors';

const NavBar = () => {
  const classes = useCustoms();

  return (
    <nav className={styles.nav}>
      <h1>Kankan</h1>
      <ul className={styles.auth}>
        <li>
          <Link href="/login">
            <a>
              Login
            </a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <Button className={classes.signup} variant="contained">
              Free Sign Up
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const useCustoms = makeStyles(theme => ({
  signup: {
    color: '#FAFAFA',
    borderRadius: '1rem',
    letterSpacing: '2px',
    backgroundColor: teal[400],
    '&:hover': {
      backgroundColor: teal[500]
    },
    '&:active': {
      backgroundColor: teal[400],
    }
  }
}))

export default NavBar
