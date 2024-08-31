"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Spinner component
const Spinner = () => (
  <svg
    className="w-6 h-6 text-white animate-spin"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path d="M4 12a8 8 0 0 1 16 0 8 8 0 0 1-16 0" fill="currentColor" />
  </svg>
);

export default function Home() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleHello = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/hello", {
        name: "John Doe",
      });
      setData(response.data.message);
    } catch (error) {
      console.error("Error sending request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen bg-gray-100">
        <Card className="h-full w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <CardHeader className="bg-blue-500 p-6 text-white">
            <CardTitle className="text-3xl font-bold">The Power of Bitcoin</CardTitle>
            <CardDescription className="text-lg mt-2">Understanding the revolutionary cryptocurrency</CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1">
            <Image src="/bitcoin.jpg" alt="Bitcoin" layout="fill" objectFit="cover" className="transition-transform transform hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg p-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold mb-4">The Impact of Bitcoin on the Financial World</h2>
                <p>Bitcoin is a decentralized digital currency without a central authority or banks. Invented in 2008 by an unknown person or group of people under the pseudonym Satoshi Nakamoto, Bitcoin operates on a peer-to-peer network. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoin offers the possibility of financial independence and privacy while enabling secure peer-to-peer transactions. Over the years, Bitcoin&apos;s value has seen dramatic fluctuations, yet it remains a cornerstone of the cryptocurrency movement, impacting the financial world and the broader digital economy.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-gray-200">
            <p className="text-gray-700 text-center">Explore the transformative effects of Bitcoin on modern finance.</p>
          </CardFooter>
        </Card>
      </div>

      <div className="h-screen bg-gray-100">
        <Card className="h-full w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <CardHeader className="bg-green-500 p-6 text-white">
            <CardTitle className="text-3xl font-bold">The Joy of Keeping Cats</CardTitle>
            <CardDescription className="text-lg mt-2">Exploring the benefits of feline companionship</CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1">
            <Image src="/Cat03.jpg" alt="Cats" layout="fill" objectFit="cover" className="transition-transform transform hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg p-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold mb-4">The Emotional and Physical Benefits of Cats</h2>
                <p>Cats are known for their calming presence, with their gentle purring and affectionate nature helping to alleviate stress and anxiety. They are relatively low-maintenance compared to other pets, requiring minimal grooming and no daily walks. The presence of a cat can reduce feelings of loneliness, offering joy and emotional comfort to their owners. Studies indicate that cat ownership may contribute to lower blood pressure and reduced risk of heart disease. Their playful and endearing behavior fosters a sense of well-being and emotional security, making them a cherished addition to many households.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-gray-200">
            <p className="text-gray-700 text-center">Discover the many ways in which cats enhance our lives.</p>
          </CardFooter>
        </Card>
      </div>

      <div className="h-screen bg-gray-100">
        <Card className="h-full w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <CardHeader className="bg-red-500 p-6 text-white">
            <CardTitle className="text-3xl font-bold">Embracing Fitness: Gym and Exercise</CardTitle>
            <CardDescription className="text-lg mt-2">Understanding the health benefits of regular exercise</CardDescription>
          </CardHeader>
          <CardContent className="relative flex-1">
            <Image src="/gym.jpg" alt="Gym and Exercise" layout="fill" objectFit="cover" className="transition-transform transform hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg p-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-semibold mb-4">The Comprehensive Benefits of Regular Exercise</h2>
                <p>Engaging in regular exercise and maintaining a gym routine offers extensive benefits for physical and mental health. Physical activities such as strength training, cardiovascular exercises, and flexibility workouts contribute to improved cardiovascular health, muscle strength, and overall endurance. Regular exercise aids in weight management and helps lower the risk of chronic conditions like diabetes, hypertension, and certain cancers. Beyond physical advantages, exercise has a profound impact on mental health by reducing stress, anxiety, and depressive symptoms. It also enhances cognitive functions and improves sleep quality, leading to a more active and healthy lifestyle. Incorporating consistent gym workouts fosters long-term vitality and overall well-being.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-gray-200">
            <p className="text-gray-700 text-center">Learn how a consistent fitness routine can transform your health and well-being.</p>
          </CardFooter>
        </Card>
        <div 
          onClick={handleHello} 
          className="flex justify-center items-center h-12  bg-orange-600 cursor-pointer  text-white font-bold text-lg"
        >
          {loading ? <Spinner /> : <span>{data ? data : 'Click Me!'}</span>}
        </div>
      </div>
    </>
  );
}
