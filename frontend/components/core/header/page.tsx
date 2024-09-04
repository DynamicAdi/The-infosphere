
import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../navbar/page';
import { dataProps } from '@/lib/types';
import { getPost } from '@/lib/calls';
import ScrollingHeadlines from '@/components/ui/headlines/page';


async function Header() {
    const posts: dataProps[] = await getPost("headlines");


  return (
    <div className={styles.header}>
        <Navbar />
        <div className={styles.lower}>
        <ScrollingHeadlines title={posts} />
        </div>
    </div>
  )
}

export default Header