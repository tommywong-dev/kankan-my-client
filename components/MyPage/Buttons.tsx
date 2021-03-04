import React from 'react'
import styles from '../../styles/MyPage/Buttons.module.css';

const Buttons = () => {
  const links = [
    {
      name: 'Shopee',
      link: 'https://shopee.com.my/joydoll.malaysia'
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/mifasolofficial'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mifasol_malaysia/?hl=en'
    }
  ]

  return (
    <>
      {
        links.map(link => (
          <a className={styles.link} href={link.link} key={link.name} target="_blank">
            <button className={styles.button} key={link.name}>
              {link.name}
            </button>
          </a>
        ))
      }
    </>
  )
}

export default Buttons
