import React from 'react'
import styles from './cards.module.scss'

function Card() {
  return (
    <div className={styles.box}>
        <img src="https://fastly.picsum.photos/id/350/1080/1920.jpg?hmac=wH6dXhIEq_wpWvnDhtJqhGbhPt_h-g9rN7CL9b58udU" alt="image" />
       <div className={styles.tags}>
        <p>Politics</p>
        <p>Tags</p>
        </div>
        <div className={styles.textContainer}>
            <h1>I am the title of the page</h1>
        </div>
    </div>
  )
}

export default Card