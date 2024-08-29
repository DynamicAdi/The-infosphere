import React from 'react'
import styles from './styles.module.scss';
import { FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import logo from '@/public/logo.jpg';

function Footer() {
    const tabs = ['Home', 'Latest news', 'Politics' ,'Sports', 'Viral', 'Entertainment', 'Video News']
  return (
    <footer className={styles.footer}>
        <div className={styles.png}>
                <img src={logo.src} alt="" />
            </div>
        <div className={styles.box}>
            <a href="/" target="_blank" rel="noopener noreferrer">
            <h1 className={styles.logo}>The Rajdharma News</h1>
            </a>
        </div>
        <div className={`${styles.box} ${styles.social}`}>
        <ul>
               {tabs.map(tab => <li key={tab}>{tab}</li>)}
            </ul>
        </div>
        <div className={`${styles.box} ${styles.social}`}>
            <ul>
                <li className={styles.links}><FaFacebook /></li>
                <li className={styles.links}><FaInstagram /></li>
                <li className={styles.links}><FaXTwitter /></li>
                <li className={styles.links}><FaYoutube /></li>
            </ul>
        </div>

  </footer>
  )
}

export default Footer