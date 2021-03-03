import React, { useEffect, useState } from 'react'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import styles from '../../styles/Post.module.css'

const Post = () => {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    getRandPost();
  }, post)

  const post_title = 'Posts';
  const posts = [
    {
      id: 0,
      href: 'https://www.facebook.com/mifasolofficial/photos/pcb.114688783954842/114680443955676/',
      src: 'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.0-9/150890006_114680453955675_2295700691486158754_o.png?_nc_cat=100&ccb=3&_nc_sid=730e14&_nc_eui2=AeHC_yLgzwfpAF5dXyjQsvwDiF48LZGv7H2IXjwtka_sfbynhPm5_u7519OrKkAGNipliunaShTaoAqHtSBpe9gp&_nc_ohc=4kVopaqdGUMAX_tUsq1&_nc_oc=AQkeTHL-n0_gSprxwqueFuAPgDXeM1KWoQ2nx53A64OZNjM1cVT37LuLHpCw1wYjioc&_nc_ht=scontent.fpen1-1.fna&oh=9689e917e4050500766d09b11df77fe7&oe=6064ABEA',
      alt: 'daily routine to keep your pubic area clean'
    },
    {
      id: 1,
      href: 'https://www.facebook.com/mifasolofficial/photos/pcb.113512417405812/113503750740012/',
      src: 'https://scontent.fpen1-1.fna.fbcdn.net/v/t1.0-9/151427269_113503754073345_6523900467912810610_o.png?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_eui2=AeFPbPROyF5B8VW5Rw_F8WdN0OnlQNMpsKrQ6eVA0ymwqmyURcvjZeZ9PFE0_ibHfxR9zlmwF_3PUXz8DpxarFEv&_nc_ohc=WtWjU5QtIa8AX82aBvj&_nc_ht=scontent.fpen1-1.fna&oh=ec0815681156d76dc549fbc4fc65a897&oe=60644BBE',
      alt: 'something about period'
    }
  ]

  const getRandPost = () => {
    let rand: number;

    do { // ensure will not select the same index
      rand = Math.floor(Math.random() * posts.length);
    } while (rand === postId);

    setPostId(rand)
    setPost(posts[rand]);
  }

  return (
    <article className={styles.post}>
      <h2 className={styles.post_title}>{post_title}</h2>
        {
          post && (
            <div className={styles.post_container}>
              <a href={post.href} target="_blank" key={post.id}>
                <img className={styles.image} src={post.src} alt={post.alt} />
              </a>
              <div className={styles.shuffle_button} onClick={() => getRandPost()}>
                <ShuffleIcon />
              </div>
            </div>
          )
        }
    </article>
  )
}

export default Post
