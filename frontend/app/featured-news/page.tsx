import React from 'react'
import styles from './styles.module.scss';
import Overlay from '@/components/core/cards/overlay/page';
import Footer from '@/components/core/footer/page';

function page() {
    const obj:any = [
        {
          id: 1,
          img: 'https://picsum.photos/1080/1920?random=1',
          title: "Product title",
        },
        {
          id: 2,
          img: 'https://picsum.photos/1080/1920?random=2',
          title: "Product title",
        },
        {
          id: 3,
          img: 'https://picsum.photos/1080/1920?random=3',
          title: "Product title",
        },
        {
          id: 4,
         img: 'https://picsum.photos/1080/1920?random=4',
          title: "Product title",
        },
        {
          id: 5,
         img: 'https://picsum.photos/1080/1920?random=5',
          title: "Product title",
        },
        {
          id: 6,
         img: 'https://picsum.photos/1080/1920?random=6',
          title: "Product title",
        }
      ];
  return (
      <>
    <div className={styles.container}>
    <div className={styles.title}>
    <h1>Latest Feeds</h1>
    </div>
    <div className={styles.child}>
      {obj.map((item:any, index:number) => (
      <Overlay key={index} id={item.id} image={item.img} title={item.title} />         
      ))}
    </div>
  </div>
    <Footer />
    </>
  )
}

export default page