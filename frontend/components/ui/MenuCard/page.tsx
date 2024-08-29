"use client"

import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import {IoIosArrowRoundForward} from 'react-icons/io'
import demo from '@/public/demo2.jpg'

const FadeCarousel = () => {
const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setFade(true); // Start fade in
      }, 500); // Duration of the fade out transition
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [items.length]);

  return (
    <>
      {items.map((item:any, index:number) => (
          <div
          key={index}
          className={`${styles.carousel_item} ${fade ? `${styles.fade_in}` : `${styles.fade_out}`}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
        <img src={demo.src} alt="image" className={styles.img} />
            <div className={styles.newsBox}>
                <h1>Breaking news</h1>
                <div className={styles.content}>
                    <h2>{item}</h2>

                    <div className={styles.catogery}>
                        <p>politics</p>
                        <p>latest</p>
                    </div>

                    <div className={`${styles.catogery} ${styles.second}`}>
                      <h4>Author • Date</h4>
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
