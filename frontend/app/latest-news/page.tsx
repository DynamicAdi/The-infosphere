import React from 'react'
import styles from './styles.module.scss';
import BlogCard from '@/components/core/cards/blog/BlogCard';
import Footer from '@/components/core/footer/page';

function page() {
  return (
    <>
    <div className={styles.container}>
      <h1>Latest News</h1>
      <div className={styles.child}>
        <BlogCard />
      </div>
    </div>
      <Footer />
    </>
  )
}

export default page