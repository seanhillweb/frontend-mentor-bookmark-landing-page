"use client";

/**
 * Summary. Button component.
 *
 * Description. A simple link displayed as a button. This should be used for routing to other pages or locations.
 */

import { Tab } from "@headlessui/react";
import Image from "next/image";
import Button from "@/components/button";
import illustrationTab1 from "@/public/illustration-features-tab-1.svg";
import illustrationTab2 from "@/public/illustration-features-tab-2.svg";
import illustrationTab3 from "@/public/illustration-features-tab-3.svg";

const TabItem = ({ children }) => {
  return (
    <Tab className="relative text-base text-center text-brand-grey-blue ui-selected:text-brand-dark-blue border-b border-brand-grey-blue/25 p-4 md:py-6 md:px-12 ui-selected:after:absolute ui-selected:after:w-1/3 md:ui-selected:after:w-full ui-selected:after:h-1 ui-selected:after:bottom-0 ui-selected:after:left-0 ui-selected:after:right-0 ui-selected:after:mx-auto ui-selected:after:bg-brand-soft-red">
      {children}
    </Tab>
  );
};

const TabPanel1 = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative flex-1">
          <div className="graphic graphic--left pb-[10%]">
            <Image src={illustrationTab1} alt="" width={536} height={346} />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center lg:items-start text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-6">
            Bookmark in one click
          </h3>
          <p className="text-brand-grey-blue mb-6">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </p>
          <Button theme="primary" label="More Info" />
        </div>
      </div>
    </Tab.Panel>
  );
};

const TabPanel2 = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative flex-1">
          <div className="graphic graphic--left pb-[10%]">
            <Image src={illustrationTab2} alt="" width={478} height={416} />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center lg:items-start text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-6">
            Intelligent search
          </h3>
          <p className="text-brand-grey-blue mb-6">
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
          </p>
          <Button theme="primary" label="More Info" />
        </div>
      </div>
    </Tab.Panel>
  );
};

const TabPanel3 = () => {
  return (
    <Tab.Panel>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="relative flex-1">
          <div className="graphic graphic--left pb-[10%]">
            <Image src={illustrationTab3} alt="" width={440} height={380} />
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center lg:items-start text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-6">
            Share your bookmarks
          </h3>
          <p className="text-brand-grey-blue mb-6">
            Easily share your bookmarks and collections with others. Create a
            shareable link that you can send at the click of a button.
          </p>
          <Button theme="primary" label="More Info" />
        </div>
      </div>
    </Tab.Panel>
  );
};

export default function Features() {
  return (
    <div className="w-full bg-white py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center max-w-xl mx-auto">
          <div className="w-full text-center mb-12">
            <h2 className="text-4xl font-medium mb-8">Features</h2>
            <p className="text-brand-grey-blue">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
        </div>

        <Tab.Group>
          <Tab.List className="flex flex-col md:flex-row items-cetner justify-center border-t border-brand-grey-blue/25 md:border-none">
            <TabItem>Simple Bookmarking</TabItem>
            <TabItem>Speedy Searching</TabItem>
            <TabItem>Easy Sharing</TabItem>
          </Tab.List>
          <Tab.Panels className="pt-16">
            <TabPanel1 />
            <TabPanel2 />
            <TabPanel3 />
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
