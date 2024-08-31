import React from "react";
import styles from "./cards.module.scss";
import { dataProps } from "@/lib/types";
import { urlFor } from "@/lib/client";
import LinkMe from "../../linkBtn/page";

function Card({ data }: { data: dataProps[] }) {
  return (
    <>
      {data.slice(0, 5).map((cardItem) => (
        <LinkMe type={cardItem._type} name={cardItem.slug.current} key={cardItem.slug.current}>
          <div className={styles.box}>
            <img src={urlFor(cardItem.mainImage).url()} alt={cardItem.title} />
            <div className={styles.tags}>
              {cardItem.categories.map((items: string, index: number) => (
                <p key={index}>{items}</p>
              ))}
            </div>
            <div className={styles.textContainer}>
              <h1>{cardItem.title}</h1>
            </div>
          </div>
        </LinkMe>
      ))}
    </>
  );
}

export default Card;
