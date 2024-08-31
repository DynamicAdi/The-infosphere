"use client"
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import {IoIosArrowRoundForward} from 'react-icons/io'
import demo from '@/public/demo2.jpg'
import { dataProps } from "@/lib/types";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import LinkMe from "@/components/core/linkBtn/page";


const FadeCarousel = ({data}: {
  data: any
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
        <Image src={urlFor(item.mainImage).url()}  className={styles.img} alt="loaded image" width={1000} height={1000} />
        {/* <img src={demo.src} alt="image" className={styles.img} /> */}
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
                      <h4>{item.author.name} • {item._createdAt.split("T")[0]}</h4>
                      <LinkMe type={item._type} name={item.slug.current}>
                      <button>Read more <IoIosArrowRoundForward size={30} style={{transform: 'rotate(-45deg)'}}/></button>
                      </LinkMe>
                    </div>
                
                </div>
            </div>
        </div>
      ))}
      </>
  );
};

export default FadeCarousel;
