import Footer from "@/components/core/footer/page";
import Blog from "@/components/ui/blog/page";
import Featured from "@/components/ui/featured/page";
import HomeSection from "@/components/ui/home/page";
import React from "react";


export default async function Home() {  
  return (
    <>
      <HomeSection />
      <Blog />
      <Featured />
      <Footer />
    </>
  );
}
