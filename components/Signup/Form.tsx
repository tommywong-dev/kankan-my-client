import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import bcrypt from 'bcryptjs';

import db from '../../services/db';
import OrLogin from './OrLogin';

const Form = () => {
  const baseURL = 'kankan.my/'; // url constant
  const classes = useStyles(); // styles
  // hooks
  const [email, setEmail] = useState('');
  const [siteName, setSiteName] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
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

  // when user focuses sitename input
  const handleFocus = (e: any) => {
    e.preventDefault();
    if (!siteName) return setSiteName(baseURL);
  }
  // when user leaves sitename input
  const handleBlur = (e: any) => {
    e.preventDefault();
    if (siteName === baseURL) setSiteName('');
  }

  // handle signing up
  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (password !== cPassword) return alert('Password and Confirm Password does not match')

    // if everything is fine then create a new user
    if (!similarUsers()) {
      createUser()
      clearInputs()
      // TODO: log user in
      alert('user created')
    }
  }

  // find similar user by email and site name
  const similarUsers = () => {
    return users.forEach((user: any) => {
      const hasSimilarEmail = user.val().email === email;
      const hasSimilarSiteName = user.val().siteName === siteName;

      if (hasSimilarEmail) {
        alert('Email has been used by other person')
        return true
      } else if (hasSimilarSiteName) {
        alert('Site name has been used by other person')
        return true
      }
    })
  }

  const createUser = () => {
    // take out the base url constant
    const site_name = siteName.substring(10);
    // hash password
    const hash_password = bcrypt.hashSync(password, 10);
    const newUser = { email, site_name, password: hash_password };
    db.create(newUser)
  }

  const clearInputs = () => {
    setEmail('')
    setSiteName('')
    setPassword('')
    setCPassword('')
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
