"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { Metadata } from "next";
import MiddlePage from "@/comp/middlePage";



export default function Home() {

  useLayoutEffect(() => {
    // Setup GSAP context
    const ctx = gsap.context(() => {
      gsap.from(".hero-section", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
  
      // Animation for images
      gsap.from(".image-item", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
  
      // Animation for text
      gsap.from(".text-content", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
      });
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <MiddlePage/>
    </>
  );
}
