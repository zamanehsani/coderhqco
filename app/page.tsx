import Community from "../components/community";
import Hero06 from "@/components/hero-06/hero-06";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <Hero06 />
      <Community />
    </div>
  );
}
