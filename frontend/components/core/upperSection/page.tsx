import React from "react";
import styles from "./styles.module.scss";
import ScrollingHeadlines from "@/components/ui/headlines/page";
import logo from "@/public/logo.jpg";
import { dataProps } from "@/lib/types";
import { getPost } from "@/lib/calls";
import Link from "next/link";

async function UpperSection() {
  const posts: dataProps[] = await getPost("headlines");

  return (
    <div className={styles.upperSection}>
      <Link href={"/"}>
        <div className={styles.logo}>
          <img src={logo.src} alt={"logo"} />
        </div>
      </Link>
      <div className={styles.headlines}>
        <div className={styles.title}>
          <h1>Latest headlines</h1>
        </div>
        <ScrollingHeadlines title={posts} />
      </div>
    </div>
  );
}

export default UpperSection;
