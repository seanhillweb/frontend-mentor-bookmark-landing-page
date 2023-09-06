"use client";

import React from "react";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import Button from "@/components/button";
import iconArrow from "@/public/icon-arrow.svg";

const AccordionItem = ({ className = "", label, children }) => {
  return (
    <Disclosure as="div" className={`w-full ${className}`}>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full flex justify-between items-center py-4 pr-4 border-t border-brand-grey-blue/25 text-left hover:text-brand-soft-red focus:text-brand-soft-red ">
            {label}
            <Image
              src={iconArrow}
              alt=""
              width={18}
              height={12}
              className="ui-open:transform ui-open:rotate-180"
            />
          </Disclosure.Button>
          <Transition
            show={open}
            className="relative overflow-hidden"
            enter="transition-all duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition-all duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              as="div"
              static={true}
              className="text-brand-grey-blue pt-4 pb-8"
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default function FAQ() {
  return (
    <div className="w-full bg-white py-20">
      <div className="container">
        <div className="w-full max-w-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-medium mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-grey-blue">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col max-w-xl mx-auto">
          <AccordionItem label="What is Bookmark?">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </p>
          </AccordionItem>
          <AccordionItem label="How can I request a new browser?">
            <p>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </p>
          </AccordionItem>
          <AccordionItem label="Is there a mobile app?">
            <p>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </p>
          </AccordionItem>
          <AccordionItem
            className="border-b"
            label="What about other Chromium browsers?"
          >
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          </AccordionItem>
        </div>
        <div className="flex justify-center items-center mt-12">
          <Button theme="primary" label="More Info" />
        </div>
      </div>
    </div>
  );
}
