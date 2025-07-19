import {
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa6";

import { Button } from "@/components/ui/button";

export default function Community() {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="container max-w-4xl px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="text-muted-foreground/80"> Designers, Developers & Builders</span>
          </h2>
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://x.com/coderhqco" target="_blank" className="size-10">
                <FaXTwitter />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.facebook.com/coderhqco" target="_blank" className="size-10">
                <FaFacebook />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/coderhqco" target="_blank" className="size-10">
                <FaGithub />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/company/coderhqco/"
                target="_blank"
                className="size-10">
                <FaLinkedin />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.instagram.com/coderhqco" target="_blank" className="size-10">
                <FaInstagram />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.tiktok.com/@coderhqco" target="_blank" className="size-10">
                <FaTiktok />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/+971566652534" target="_blank" className="size-10">
                <FaWhatsapp />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
