import Image from "next/image";
import DailyQuestion from "./components/question";

export default function Home() {
  return (
    <div className="home-container">
      <Image
        src="/g23.png"
        alt="Background"
        fill
        className="background-image"
        priority
      />
      <h1 className="title">OneDSA</h1>
      <h1 className="heading">One DSA Question a day</h1>
      <DailyQuestion />
    </div>
  );
}