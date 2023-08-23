/**
 * Summary. Button component.
 *
 * Description. A simple link displayed as a button. This should be used for routing to other pages or locations.
 */

import Image from "next/image";
import Button from "@/components/button";
import illustrationHero from "@/public/illustration-hero.svg";

export default function Banner() {
  return (
    <div className="w-full bg-white py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">

          <div className="flex flex-col flex-1 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-12 md:mt-0 mb-8">
              A Simple Bookmark Manager
            </h1>
            <p className="text-brand-grey-blue">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex flex-row justify-center md:justify-start gap-4 mt-8">
              <Button theme="primary" label="Get it on Chrome" />
              <Button theme="tertiary" label="Get it on Firefox" />
            </div>
          </div>

          <div className="relative flex-1 order-1 md:order-2">
            <div className="graphic">
              <Image src={illustrationHero} alt="" width={657} height={466} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
