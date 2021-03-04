import React, { FC, useState } from 'react'

import type { PageDataType } from './index';
import PostDialog from './PostDialog';
import styles from '../../styles/MyPage/Post.module.css'

const Post: FC<PageDataType> = ({ data: { post } }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <article className={styles.post}>
      <h2 className={styles.post_title}>{post.header}</h2>

      <div className={styles.card} onClick={handleClickOpen}>
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

      <PostDialog post={post} open={open} handleClose={handleClose} />
    </article>
  )
}



export default Post
