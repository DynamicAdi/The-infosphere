import React from "react";
import styles from "./styles.module.scss";

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
  },
];


function MoreNews() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.box}>
          <div className={`${styles.context}`}>
            <div className={`${styles.product} ${styles.first}`}>
              <div className={styles.image}>
                <img src={obj[0].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h1>{obj[0].title}</h1>
              </div>
            </div>
            <div className={`${styles.product} ${styles.innerSecond}`}>
              <div className={styles.image}>
                <img src={obj[1].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                {/* <h3>{obj[1].catogery}</h3> */}
                <h1>{obj[1].title}</h1>
              </div>
            </div>
          </div>
          <div className={`${styles.context} ${styles.second}`}>
            <div className={`${styles.product} ${styles.secondFirst}`}>
              <div className={styles.image}>
                <img src={obj[2].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h1>{obj[2].title}</h1>
              </div>
            </div>
          </div>
          <div className={`${styles.context}`}>
            <div className={`${styles.product} ${styles.first}`}>
              <div className={styles.image}>
                <img src={obj[4].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h1>{obj[4].title}</h1>
              </div>
            </div>
            <div className={`${styles.product} ${styles.innerSecond}`}>
              <div className={styles.image}>
                <img src={obj[5].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h1>{obj[5].title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreNews;
