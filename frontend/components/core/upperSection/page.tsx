import React from 'react'
import styles from './styles.module.scss'
import ScrollingHeadlines from '@/components/ui/headlines/page'
import logo from '@/public/logo.jpg';

function UpperSection() {
  return (
    <div className={styles.upperSection}>
    <div className={styles.logo}>
    <img src={logo.src} alt={'logo'} />
    </div>
    <div className={styles.headlines}>
    <div className={styles.title}><h1>Latest headlines</h1></div>
        <ScrollingHeadlines />
        </div>
    </div>
  )
}

export default UpperSection