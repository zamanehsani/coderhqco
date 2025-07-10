import { Badge } from "@/components/ui/badge";
import { BackgroundPattern } from "./background-pattern";

const Hero06 = () => {
  return (
    <div className="mt-15 flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl pb-6">
        <Badge className="bg-gradient-to-br via-30% from-primary to-primary rounded-full py-1 border-none">
          @coderhqco
        </Badge>
        <h1 className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Digital Wizards
        </h1>
        <span className="border rounded-full  px-4 py-0.5">your digital business partner</span>
        <p className="mt-6 text-[17px] md:text-lg">
          We help you with the latest technologies for your brand and business. Our team of
          brillient designers and developers will upgrade your business.
        </p>
      </div>
    </div>
  );
};

export default Hero06;
