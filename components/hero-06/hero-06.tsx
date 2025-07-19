import { Badge } from "@/components/ui/badge";

const Hero06 = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 w-full">
      <div className="text-center max-w-2xl space-y-4 sm:space-y-6">
        <Badge className="bg-gradient-to-br via-30% from-primary to-primary rounded-full py-1 border-none">
          @coderhqco
        </Badge>
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold !leading-[1.2] tracking-tight">
          Digital Wizards
        </h1>
        <span className="inline-block border rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-sm sm:text-base">
          your digital business partner
        </span>
        <p className="text-base sm:text-[17px] md:text-lg leading-relaxed px-4 sm:px-0">
          We help you with the latest technologies for your brand and business. Our team of
          brillient designers and developers will upgrade your business.
        </p>
      </div>
    </div>
  );
};

export default Hero06;
