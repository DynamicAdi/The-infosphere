import React from 'react'
import styles from './styles.module.scss';
import Navbar from '@/components/core/navbar/page';
import FadeCarousel from '../MenuCard/page';

function HomeSection() {
  // const news = [1, 2, 3, 4, 5]
  return (
    <div className={styles.container}>
        <div className={styles.child}>
            <Navbar />
            <FadeCarousel />
        </div>
    </div>
  )
}

export default HomeSection