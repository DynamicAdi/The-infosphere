import { getPost } from "@/lib/calls";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import RichText from "@/components/core/portable/page";
import UpperSection from "@/components/core/upperSection/page";
import Card from "@/components/core/cards/side/Card";
import { dataProps } from "@/lib/types";
import Featured from "@/components/ui/featured/page";
import Footer from "@/components/core/footer/page";
import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

async function Slug({
  params
}: {
  params: { slug: string, type: string };
}) {;
  
  const posts = await getPost("full", params.slug, params.type);
  const today: dataProps[] = await getPost("today");

  return (
    <div className={styles.main}>
    <div className={styles.logo}>
      {/* <UpperSection /> */}
    </div>
      <div className={styles.parent}>
        <div className={styles.container}>
          <div className={styles.main}>
            <Image
              src={urlFor(posts[0].mainImage).url()}
              alt={posts[0].title}
              width={800}
              height={600}
              className={styles.img}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.author}>
              {posts[0].author.name} • {posts[0]._createdAt.split("T")[0]}
            </h1>
            <h1>{posts[0].title}</h1>
            <p>
              {posts[0].description}
            </p>

            <div className={styles.catogeries}>
              {posts[0].categories.map((items: string, index: number) => (
                <div className={styles.catogery} key={index}>
                  {items}
                </div>
              ))}
            </div>

            <RichText blocks={posts[0].body} />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Today&apos;s Update</h1>
          <div className={`${styles.child}`}>
            <Card data={today} />
          </div>
        </div>
      </div>
      <Featured />
      <Footer />
    </div>
  );
}

export default Slug;
