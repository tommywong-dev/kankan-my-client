import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import bcrypt from 'bcryptjs';

import db from '../../services/db';
import OrSignup from './OrSignup';

const Form = () => {
  const classes = useStyles(); // styles
  // hooks
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    getUsers()
    return () => db.getAll().off('value')
  }, [])

  // retrieve users from db
  const getUsers = async () => {
    db.getAll().on('value', snapshot => {
      setUsers(snapshot)
    });
  }

  // handle user input
  const handleChange = (e: any, type: string) => {
    e.preventDefault();
    const val: string = e.target.value;

    switch (type) {
      case 'email':
        setEmail(val);
        break;
      case 'password':
        setPassword(val);
        break;
      default:
        break;
    }
  }

  // handle login button
  const handleLogin = (e: any) => {
    e.preventDefault();

    // find user by email
    const user = users.forEach((user: any) => {
      const valid = (user.val().email === email && bcrypt.compareSync(password, user.val().password));
      if (valid) {
        setEmail('');
        setPassword('');
        return true
      }
    })

    // TODO: log user in
    if (user) return alert('Correct credentials!')
    // if none users have valid condition, then throw error
    return alert('Incorrect email or password')
  }

  return (
    <form className={classes.root} onSubmit={handleLogin}>
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={e => handleChange(e, 'email')}
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
