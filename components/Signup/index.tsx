import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import styles from '../../styles/Signup/index.module.css';

const SignupComponent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [siteName, setSiteName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const handleChange = (e: any, type: string) => {
    e.preventDefault();
    switch (type) {
      case 'email': setEmail(e.target.value);
      case 'site_name': setSiteName(e.target.value);
      case 'password': setPassword(e.target.value);
      case 'c_password': setCPassword(e.target.value);
    }
  }

  const onHandleSignup = (e: any) => {
    e.preventDefault();
    if (password !== cPassword) return console.log('oh no');

    const form = { email, siteName, password, cPassword };
    console.log('form:', form);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Kankan</h1>
        <h2>Sign up a Kankan account</h2>
        <form className={classes.root} onSubmit={onHandleSignup}>
          <TextField type="email" label="Email" onChange={e => handleChange(e, 'email')} />
          <TextField type="text" label="Site Name" onChange={e => handleChange(e, 'site_name')} />
          <TextField type="password" label="Password" onChange={e => handleChange(e, 'password')} />
          <TextField type="password" label="Confirm Password" onChange={e => handleChange(e, 'c_password')} />
          <Button type="submit" color="primary" variant="contained">Sign Up</Button>
        </form>
      </main>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '2rem',
      padding: '3rem 2rem',
      borderRadius: '1rem',
      background: '#FAFAFA',
      maxWidth: '400px',
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 300,
      },
      '& .MuiButton-root': {
        marginTop: '3rem',
        borderRadius: '1rem',
        letterSpacing: '2px'
      }
    },
  }),
);

export default SignupComponent
