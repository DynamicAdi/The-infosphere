import Loader from "@/components/core/loader/page";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const HomeSection = dynamic(() => import('@/components/ui/home/page'), {ssr: true})
const Blog = dynamic(() => import('@/components/ui/blog/page'), {ssr: true})
const Featured = dynamic(() => import('@/components/ui/featured/page'), {ssr: true})
const MoreNews = dynamic(() => import('@/components/ui/images/page'), {ssr: true})
const Footer = dynamic(() => import('@/components/core/footer/page'), {ssr: false})

export default async function Home() { 

  return (
    <Suspense fallback={<Loader />}>
      <HomeSection />
      <Blog />
      <Featured />
      <MoreNews />
      <Footer />
    </Suspense>
  );
}
