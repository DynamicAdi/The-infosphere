import React from 'react'
import styles from './styles.module.scss'

function Overlay({ image, title}: {
    image: any,
    title: string,
}) {

  return (
    <div className={`${styles.context}`}>
    <div className={`${styles.product}`}>
      <div className={styles.image}>
        <img src={image} alt="" className={styles.img} />
      </div>
      <div className={styles.text}>
        <h1>{title}</h1>
      </div>
    </div>
  </div>  
  )
}

export default Overlay