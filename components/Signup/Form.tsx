import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import OrLogin from './OrLogin';
import styles from '../../styles/Signup/Form.module.css';

const Form = () => {
  const classes = useStyles();

  const baseURL = 'kankan.my/';

  const [email, setEmail] = useState('');
  const [siteName, setSiteName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  const handleChange = (e: any, type: string) => {
    e.preventDefault();
    const val: string = e.target.value;

    switch (type) {
      case 'email':
        setEmail(val);
        break;
      case 'site_name':
        (val.substring(0, 10) !== baseURL) ? setSiteName(baseURL) : setSiteName(val);
        break;
      case 'password':
        setPassword(val);
        break;
      case 'c_password':
        setCPassword(val);
        break;
      default:
        break;
    }
  }

  const handleFocus = (e: any) => {
    e.preventDefault();
    if (!siteName) return setSiteName(baseURL);
  }

  const handleBlur = (e: any) => {
    e.preventDefault();
    if (siteName === baseURL) setSiteName('');
  }

  const handleSignup = (e: any) => {
    e.preventDefault();
    if (password !== cPassword) return console.log('oh no');

    const form = { email, siteName, password, cPassword };
    console.log('form:', form);
  }

  return (
    <form className={classes.root} onSubmit={handleSignup}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={e => handleChange(e, 'email')}
      />
      <TextField
        type="text"
        label="Site Name"
        value={siteName}
        onChange={e => handleChange(e, 'site_name')}
        onFocus={e => handleFocus(e)}
        onBlur={e => handleBlur(e)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={e => handleChange(e, 'password')}
      />
      <TextField
        type="password"
        label="Confirm Password"
        value={cPassword}
        onChange={e => handleChange(e, 'c_password')}
      />
      <Button type="submit" color="primary" variant="contained">Sign Up</Button>

      <OrLogin />
    </form>
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
      margin: '2rem 0',
      padding: '0.8rem',
      borderRadius: '1rem',
      letterSpacing: '2px',
      fontSize: '1rem'
    }
  },
}),
);

export default Form
