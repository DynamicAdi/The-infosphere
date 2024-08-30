import React from 'react'
import styles from './styles.module.scss';
import Navbar from '@/components/core/navbar/page';
import FadeCarousel from '../MenuCard/page';
import ScrollingHeadlines from '../headlines/page';
import logo from '@/public/logo.jpg';
import { getPost } from '@/lib/calls';
import { dataProps } from '@/lib/types';

async function HomeSection() {
  const posts = (await getPost('banner')) as dataProps[];
  return (
    <div className={styles.container}>
    <div className={styles.upperSection}>
    <div className={styles.logo}>
    <img src={logo.src} alt={'logo'} />
    </div>
    <div className={styles.headlines}>
    <div className={styles.title}><h1>Latest headlines</h1></div>
        <ScrollingHeadlines />
        </div>
    </div>

        <div className={styles.child}>
            <Navbar />
            <FadeCarousel data={posts} />
        </div>
    </div>
  )
}

export default HomeSection