import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import logo from '@/public/logo.jpg';
import { dataProps } from "@/lib/types";
import { getPost } from "@/lib/calls";
import LinkMe from "../linkBtn/page";

async function Footer() {
    const posts:dataProps[] = await getPost('headlines');

  return (
    <div className={styles.mainFooter}>
      <div className={styles.containers}>
        <h1>The InfoSphere</h1>
      </div>
      <div className={`${styles.containers} ${styles.trend}`}>
        <h2>Trending Headlines</h2>
        <ul>
        {posts.map((headline:dataProps, index:number) => (
        <LinkMe type={headline._type} name={headline.slug.current} key={index}>
        {headline.title}
          </LinkMe>
          ))}
        </ul>
      </div>

{/* 3rd container */}
      <div className={`${styles.containers}`}>
        <div className={styles.social}>
        <h2>Quick links</h2>
        <ul>
               <li>Home</li>
               <li>About</li>
               <li>Latest news</li>
               <li>Today update</li>
               <li>More Feeds</li>
               <li>Contact us</li>
            </ul>
        </div>

        <div className={`${styles.containers}`}>
        <div className={styles.social}>
            <h2>Social media</h2>
        <ul>
                <li className={styles.links}><FaFacebook /></li>
                <li className={styles.links}><FaInstagram /></li>
                <li className={styles.links}><FaXTwitter /></li>
                <li className={styles.links}><FaYoutube /></li>
            </ul>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
