import React from 'react'
import styles from './styles.module.scss';
import BlogCard from '@/components/core/cards/blog/BlogCard';
import Card from '@/components/core/cards/side/Card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { getPost } from '@/lib/calls';
import { dataProps } from '@/lib/types';

async function Blog() {
    const posts:dataProps[] = await getPost('latest');
    const today:dataProps[] = await getPost('today');
    

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.header}>
            <h1 className={styles.title}>Latest News</h1>
            <Link href={'/latest-news'}>
            <p>View all</p>
            <FaArrowRight size={26} />
            </Link>
            </div>
            <div className={styles.child}>
                    <BlogCard all={false} data={posts} />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>Today&apos;s Update</h1>
            <div className={`${styles.child} ${styles.col}`}>
                    <Card data={today}/>
            </div>
        </div>

    </div>
  )
}

export default Blog