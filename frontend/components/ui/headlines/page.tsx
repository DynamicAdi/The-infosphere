import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import LinkMe from "@/components/core/linkBtn/page";
import { dataProps } from "@/lib/types";


const ScrollingHeadlines = ({title}: {title: any}) => {
  console.log(title);
  
  return (
<div className={styles.scrolling_container}>
      <div className={styles.scrolling_content}>
        {title.map((headline:dataProps, index:number) => (
        <LinkMe type={headline._type} name={headline.slug.current} key={index}>
            {headline.title}
          </LinkMe>
        ))}

{title.map((headline:dataProps, index:number) => (
        <LinkMe type={headline._type} name={headline.slug.current} key={index}>
            {headline.title}
          </LinkMe>
        ))}
        

      </div>
    </div>
  );
};

export default ScrollingHeadlines;
