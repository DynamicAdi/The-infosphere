import React from 'react'
import styles from './styles.module.scss';
import BlogCard from '@/components/core/cards/blog/BlogCard';
import Card from '@/components/core/cards/side/Card';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { getPost } from '@/lib/calls';

async function Blog() {
    const tab:number[] = [1, 2, 3, 4, 5];
    const posts:dataProps[] = await getPost('today');
    const latest:dataProps[] = await getPost('latest');
    

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.header}>
            <h1 className={styles.title}>Today&apos;s News</h1>
            <Link href={'/latest-news'}>
            <p>View all</p>
            <FaArrowRight size={26} />
            </Link>
            </div>
            <div className={styles.child}>
                {tab.map((item, index) => (
                    <BlogCard key={index} data={posts} />
                ))}
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>Latest Updates</h1>
            <div className={`${styles.child} ${styles.col}`}>
                {tab.map((item, index) => (
                    <Card key={index} data={latest}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Blog