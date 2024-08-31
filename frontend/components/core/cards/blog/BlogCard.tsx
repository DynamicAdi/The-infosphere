import React from 'react'
import styles from './blog.module.scss';
import { dataProps } from '@/lib/types';
import { urlFor } from '@/lib/client';
import LinkMe from '../../linkBtn/page';


function BlogCard({data, all}: {
  data: dataProps[]
  all: boolean
}) {
  return (
    <>
    {
    // all ? data : data
    all ? data.map((items: dataProps) => (
      <LinkMe type={items._type} name={items.slug.current} key={items.slug.current}>
      <div className={styles.box}>
          <div className={styles.image}>
            <img src={urlFor(items.mainImage).url()} alt={items.title} />
          </div>
          <div className={styles.content}>
              <h1>{items.title}</h1>
              <p>{items.metadescription}</p>
              <div className={styles.lower}>
               <p>{items.author.name} • {items._createdAt.split('T')[0]}</p> 
              </div>
          </div>
      </div> 
      </LinkMe>
    )) : data
    .slice(0, 6)
    .map((items: dataProps) => (
      <LinkMe type={items._type} name={items.slug.current} key={items.slug.current}>
          <div className={styles.box} key={items.slug.current}>
          <div className={styles.image}>
            <img src={urlFor(items.mainImage).url()} alt={items.title} />
          </div>
          <div className={styles.content}>
              <h1>{items.title}</h1>
              <p>{items.metadescription}</p>
              <div className={styles.lower}>
               <p>{items.author.name} • {items._createdAt.split('T')[0]}</p> 
              </div>
          </div>
      </div> 
      </LinkMe>
    ))}
    </>
  )
}

export default BlogCard