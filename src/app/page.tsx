"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState<string | null>(null);

  const handleHello = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/hello", {
        name: "John Doe",
      });
      // Assuming the response contains a message
      setData(response.data.message);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="bg-black h-screen flex-col w-full flex items-center justify-center">
      {data && <p className="text-white text-3xl text-center p-3 m-3">{data}</p>}
      <button onClick={handleHello} className="text-white bg-blue-500 p-3 rounded">
        Click
      </button>
    </div>
  );
}
