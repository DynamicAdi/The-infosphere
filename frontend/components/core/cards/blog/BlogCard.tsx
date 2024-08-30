import React from 'react'
import styles from './blog.module.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { dataProps } from '@/lib/types';


function BlogCard({data}: {
  data: dataProps[]
}) {
  return (
    <>
    {Object.values(data).map(() => (
    <div className={styles.box}>
    <div className={styles.image}>
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    <div className={styles.content}>
        <h1>I am the title of the blog</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi voluptatum</p>
        <div className={styles.lower}>
         <p>Author • Date</p> 
        </div>
    </div>
</div>      
))}

    </>
  )
}

export default BlogCard