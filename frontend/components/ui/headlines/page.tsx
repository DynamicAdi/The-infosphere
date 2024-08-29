import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const ScrollingHeadlines = () => {
  const headlines = [
    "Headline 1",
    "Headline 2",
    "Headline 3",
    "Headline 4",
    "Headline 5",
  ];

  return (
<div className={styles.scrolling_container}>
      <div className={styles.scrolling_content}>
        {headlines.map((headline, index) => (
        // <Link href={'/news'} key={index}>
        <Link href={'/news'} key={index} className={styles.headline}>
            {headline}
          </Link>
        // </Link>
        ))}
        {headlines.map((headline, index) => (
        // <Link href={'/news'} key={index}>
          <Link href={'/news'} key={index + headlines.length} className={styles.headline}>
            {headline}
          </Link>
        // </Link>
        ))}
      </div>
    </div>
  );
};

export default ScrollingHeadlines;
