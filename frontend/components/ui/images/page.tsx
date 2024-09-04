import React from "react";
import styles from "./styles.module.scss";
import Overlay from "@/components/core/cards/overlay/page";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { dataProps } from "@/lib/types";
import { getPost } from "@/lib/calls";
import { urlFor } from "@/lib/client";
import LinkMe from "@/components/core/linkBtn/page";


async function MoreNews() {
  const posts:dataProps[] = await getPost('feeds');

  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <h1>More Feeds</h1>
      <Link href="/featured-news">
        <p>View all</p>
        <FaArrowRight size={26} />
      </Link>
      </div>
      <div className={styles.child}>
        {posts.slice(0, 8).map((item:dataProps) => (
        <>
      <LinkMe type={item._type} name={item.slug.current} key={item.slug.current}>
        <Overlay key={item._createdAt} image={urlFor(item.mainImage).url()} title={item.title} />         
       </LinkMe>
        <LinkMe type={item._type} name={item.slug.current} key={item.slug.current}>
        <Overlay key={item._createdAt} image={urlFor(item.mainImage).url()} title={item.title} />         
       </LinkMe>
       </>
        ))}
      </div>
    </div>
  );
}

export default MoreNews;
