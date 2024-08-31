import React from 'react'
import styles from './styles.module.scss';
import BlogCard from '@/components/core/cards/blog/BlogCard';
import Footer from '@/components/core/footer/page';
import { dataProps } from '@/lib/types';
import { getPost } from '@/lib/calls';

async function page() {
  const posts:dataProps[] = await getPost('latest');
  return (
    <>
    <div className={styles.container}>
      <h1>Latest News</h1>
      <div className={styles.child}>
        <BlogCard data={posts} all={true} />
      </div>
    </div>
      <Footer />
    </>
  )
}

export default page