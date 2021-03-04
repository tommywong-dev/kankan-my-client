import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import styles from '../../styles/MyPage/PostDialog.module.css';

const PostDialog = ({ post, open, handleClose}) => {
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="dialog-content"
        maxWidth={'xs'}
      >
        <DialogContent>
          <p className={styles.subtitle}>{post.subtitle}</p>    
          <h2 className={styles.title}>{post.title}</h2>
          <div className={styles.content_container}>
            <img src={post.image_src} alt={post.image_alt} width={240} height={240} />
            <div className={styles.content}>
              {post.content}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">I see</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default PostDialog
