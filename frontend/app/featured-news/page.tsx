import React from 'react'
import styles from './styles.module.scss';
import Overlay from '@/components/core/cards/overlay/page';
import Footer from '@/components/core/footer/page';
import { dataProps } from '@/lib/types';
import { getPost } from '@/lib/calls';
import { urlFor } from '@/lib/client';

async function page() {
  const posts:dataProps[] = await getPost('feeds')
  return (
      <>
    <div className={styles.container}>
    <div className={styles.title}>
    <h1>Latest Feeds</h1>
    </div>
    <div className={styles.child}>
      {posts.map((item:dataProps, index:number) => (
      <Overlay key={index} image={urlFor(item.mainImage).url()} title={item.title} />         
      ))}
    </div>
  </div>
    <Footer />
    </>
  )
}

export default page