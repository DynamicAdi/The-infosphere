"use client";

import React from "react";
import styles from "./styles.module.scss";
import BlogCard from "@/components/core/cards/blog/BlogCard";
import Carousel from "../Carousel/page";
import { getPost } from "@/lib/calls";

async function Featured() {
  const posts:dataProps[] = await getPost('featured');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured News</h1>
      <div className={styles.child}>
        <Carousel autoplay={true}>
          <BlogCard data={posts} />
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
