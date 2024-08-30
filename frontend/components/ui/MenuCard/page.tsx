"use client"
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import {IoIosArrowRoundForward} from 'react-icons/io'
import demo from '@/public/demo2.jpg'
import { dataProps } from "@/lib/types";


const FadeCarousel = ({data}: {
  data: dataProps[]
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setFade(true); // Start fade in
      }, 500); // Duration of the fade out transition
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [data.length]);

  return (
    <>
      {data.map((item:dataProps, index:number) => (
          <div
          key={index}
          className={`${styles.carousel_item} ${fade ? `${styles.fade_in}` : `${styles.fade_out}`}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
        <img src={demo.src} alt="image" className={styles.img} />
            <div className={styles.newsBox}>
                <h1>{item.title}</h1>
                <div className={styles.content}>
                    <h2>{item.metadescription}</h2>

                    <div className={styles.catogery}>
                        {item.categories.map((item: string, index: number) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>

                    <div className={`${styles.catogery} ${styles.second}`}>
                      <h4>{item.author._ref} • {item._createdAt}</h4>
                      <button>Read more <IoIosArrowRoundForward size={30} style={{transform: 'rotate(-45deg)'}}/></button>
                    </div>
                
                </div>
            </div>
        </div>
      ))}
      </>
  );
};

export default FadeCarousel;
