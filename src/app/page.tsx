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
      <main className="h-screen w-full bg-blue-100 flex justify-center">
        <section className="w-[90%] h-[100%] m-4 mb-4">
          <div className="hero-section flex flex-col items-center justify-center mt-8 md:mt-0">
            <Image
              src="/hero1.png"
              height={900}
              width={1500}
              alt="hero image"
              className="mb-8 w-full h-auto" // Ensure aspect ratio and full width
              quality={100}
              sizes="100vw"
              priority // Mark as priority
            />
            <div className="flex flex-wrap gap-4 md:gap-8 lg:gap-12 mt-4 w-full justify-center">
              <div className="image-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
                <Image
                  src="/FindDoctors.png"
                  alt="Find Doctors"
                  className="object-contain w-full h-auto" // Ensure aspect ratio
                  quality={100}
                  width={150} // Set appropriate width
                  height={150} // Set appropriate height
                  sizes="100vw"
                />
              </div>
              <div className="image-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
                <Image
                  src="/medicine.png"
                  alt="Medicine"
                  className="object-contain w-full h-auto" // Ensure aspect ratio
                  quality={100}
                  width={150}
                  height={150}
                  sizes="100vw"
                />
              </div>
              <div className="image-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
                <Image
                  src="/labTest.png"
                  alt="Lab Test"
                  className="object-contain w-full h-auto" // Ensure aspect ratio
                  quality={100}
                  width={150}
                  height={150}
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="text-content text-center px-4 py-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
  Find the Correct Doctor for You
  <br />
  <span className="block text-lg md:text-xl lg:text-2xl text-gray-600 mt-2">
    Our doctors have received over 5,000 ratings on Google
  </span>
</h1>

            </div>
            <MiddlePage/>
          </div>
        </section>
      </main>
    </>
  );
}
