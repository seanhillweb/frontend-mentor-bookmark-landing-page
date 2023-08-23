/**
 * Summary. Button component.
 *
 * Description. A simple link displayed as a button. This should be used for routing to other pages or locations.
 */
import Image from "next/image";
import Button from "@/components/button";
import logoChrome from "@/public/logo-chrome.svg";
import logoFirefox from "@/public/logo-firefox.svg";
import logoOpera from "@/public/logo-opera.svg";
import bgDots from "@/public/bg-dots.svg";

const Card = ({ className="", children }) => {
  return (
    <div className={`overflow-hidden rounded-xl bg-white shadow-xl shadow-brand-soft-blue/20 ${className}`}>
      <div className="flex flex-col justify-center items-center text-center p-8">
        {children}
      </div>
      <Image src={bgDots} alt="" width={280} height={4} className="w-full" />
      <div className="flex justify-center items-center p-6">
        <Button className="grow" theme="primary" label="Add & Install Extension" />
      </div>
    </div>
  );
};

export default function Download() {
  return (
    <div className="w-full bg-white py-20 md:pt-20 md:pb-40">
      <div className="container">
        <div className="flex flex-col items-center max-w-xl mx-auto">
          <div className="w-full text-center mb-12">
            <h2 className="text-4xl font-medium mb-8">
              Download the extension
            </h2>
            <p className="text-brand-grey-blue">
              We&apos;ve got more browsers in the pipeline. Please do let us
              know if you&apos;ve got a favourite you&apos;d like us to
              prioritize.
            </p>
          </div>
        </div>

        <div className="columns-1 md:columns-3 gap-8 max-w-4xl mx-auto">
          <Card className="mb-8 md:mb-0">
            <Image
              src={logoChrome}
              alt="Logo for Google Chrome"
              width={102}
              height={100}
            />
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-2">Add to Chrome</h3>
            <p className="text-base text-brand-grey-blue">Minimum version 62</p>
          </Card>
          <Card className="mb-8 md:mb-0 md:translate-y-10">
            <Image
              src={logoFirefox}
              alt="Logo for Firefox"
              width={102}
              height={100}
            />
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-2">Add to Firfox</h3>
            <p className="text-base text-brand-grey-blue">Minimum version 55</p>
          </Card>
          <Card className="md:translate-y-20">
            <Image
              src={logoOpera}
              alt="Logo for Opera"
              width={102}
              height={100}
            />
            <h3 className="text-xl md:text-2xl font-medium mt-8 mb-2">Add to Opera</h3>
            <p className="text-base text-brand-grey-blue">Minimum version 46</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
