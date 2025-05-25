"use client";

import Image from "next/image";
import DailyQuestion from "./components/question";
import { useEffect, useState } from "react";
import { SunMoon } from 'lucide-react';
import Clock from "./components/clock";

export default function Home() {
  const images = ["/g23.png", "/g22.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightMode, setlightMode] = useState(false)

  const switchImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setlightMode((prev)=>!prev)
  };


  useEffect(()=>{
    document.body.classList.toggle("light",lightMode);
  })

  return (
    <div className="home-container">
      <Image
        src={images[currentIndex]}
        alt="Background"
        fill
        className="background-image"
        priority
      />
      <div className="navbar">
        <h1 className="title">OneDSA</h1>
        <h3 className="clock"><Clock /></h3>
      </div>
      <h1 className="heading">One DSA Question a day</h1>
      <DailyQuestion />
      <button onClick={switchImage} className="mode"><SunMoon/></button>
    </div>
  );
}
