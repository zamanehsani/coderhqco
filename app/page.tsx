import { BackgroundPattern } from "@/components/hero-06/background-pattern";
import Community from "../components/community";
import Hero06 from "@/components/hero-06/hero-06";

export default function Home() {
  return (
    <div className="relative h-dvh w-full overflow-hidden ">
      <BackgroundPattern />
      <div className="relative z-10 h-screen flex flex-col justify-center items-center px-4 py-8">
        <Hero06 />
        <Community />
      </div>
    </div>
  );
}
