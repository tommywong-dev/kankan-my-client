import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';

import type { PageDataType } from './index';
import styles from '../../styles/MyPage/Post.module.css'

const Post: FC<PageDataType> = ({ data: { post } }) => {

  return (
    <article className={styles.post}>
      <h2 className={styles.post_title}>{post.header}</h2>

      <div className={styles.card}>
        <div className={styles.card_content}>
          <p>{post.subtitle}</p>
          <h2>{post.title}</h2>
        </div>

        <img
          className={styles.card_image}
          src={post.image_src}
          alt={post.image_alt}
          width={240} height={240}
        />
      </div>
    </article>
  )
}

export default Post
