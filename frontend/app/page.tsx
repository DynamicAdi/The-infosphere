"use client";

import Footer from "@/components/core/footer/page";
import Blog from "@/components/ui/blog/page";
import Featured from "@/components/ui/featured/page";
import HomeSection from "@/components/ui/home/page";
import { getPost } from "@/lib/calls";
import React, { useEffect } from "react";


const posts = async () => {
  console.log("data: ", posts);
  return posts;

}

export default async function Home() {
  const posts = await getPost();
  console.log(posts);
  
  return (
    <>
      <HomeSection />
      <Blog />
      <Featured />
      <Footer />
    </>
  );
}
