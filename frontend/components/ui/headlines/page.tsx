import React from "react";
import styles from "./styles.module.scss";

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
          <span key={index} className={styles.headline}>
            {headline}
          </span>
        ))}
        {headlines.map((headline, index) => (
          <span key={index + headlines.length} className={styles.headline}>
            {headline}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingHeadlines;
