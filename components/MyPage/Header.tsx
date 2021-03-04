import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import styles from '../../styles/MyPage/Header.module.css'

const Header = ({ username, description }) => {
  return (
    <header className={styles.header}>
      <Avatar className={styles.logo} src="/logo.png" alt="logo" />
      <h1 className={styles.username}>{username}</h1>
      <h1 className={styles.description}>{description}</h1>
    </header>
  )
}

export default Header
