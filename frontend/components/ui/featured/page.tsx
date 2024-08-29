"use client";

import React from "react";
import styles from "./styles.module.scss";
import BlogCard from "@/components/core/cards/blog/BlogCard";
import Carousel from "../Carousel/page";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Featured News</h1>
      <div className={styles.child}>
        <Carousel autoplay={true}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Carousel>
      </div>
    </div>
  );
}

export default Featured;
