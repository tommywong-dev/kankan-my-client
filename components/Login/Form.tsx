import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import OrSignup from './OrSignup';

const Form = () => {
  const classes = useStyles();

  const [siteName, setSiteName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: any, type: string) => {
    e.preventDefault();
    const val: string = e.target.value;

    switch (type) {
      case 'site_name':
        setSiteName(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        break;
    }
  }

  const handleSignup = (e: any) => {
    e.preventDefault();

    const form = { siteName, password };
    console.log('form:', form);
  }

  return (
    <form className={classes.root} onSubmit={handleSignup}>
      <TextField
        type="text"
        label="Site Name"
        value={siteName}
        onChange={e => handleChange(e, 'site_name')}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={e => handleChange(e, 'password')}
      />
      
      <Button type="submit" color="primary" variant="contained">Log In</Button>

      <OrSignup />
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
