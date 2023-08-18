"use client";

import React from "react";
import { Disclosure, Transition } from "@headlessui/react";

const AccordionItem = ({ label, children, ...props }) => {
  return (
    <Disclosure as="div" className="w-full" {...props}>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full py-4 border-t border-brand-grey-blue text-left hover:text-brand-soft-red focus:text-brand-soft-red ">
            {label}
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
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="w-full text-center mb-12">
            <h2 className="text-4xl font-medium mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-grey-blue">
              Here are some of our FAQs. If you have any other questions
              you&apos;d like answered please feel free to email us.
            </p>
          </div>

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
          <AccordionItem label="What about other Chromium browsers?">
            <p>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </p>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}
