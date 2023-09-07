"use client";

/**
 * Summary. Mobile navigation.
 */

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { menu } from "@/data/data";
import Button from "@/components/button";
import logoBookmark from "@/public/logo-bookmark-mobile.svg";
import iconFacebook from "@/public/icon-facebook.svg";
import iconTwitter from "@/public/icon-twitter.svg";
import iconHamburger from "@/public/icon-hamburger.svg";
import iconClose from "@/public/icon-close.svg";

export default function MobileMenu() {
  return (
    <Menu>
      <Menu.Button className="p-4">
        <span className="sr-only">Open menu</span>
        <Image
          src={iconHamburger}
          alt=""
          width={18}
          height={15}
          aria-hidden={true}
        />
      </Menu.Button>

      <Transition as={Fragment}>
        <div className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-brand-dark-blue bg-opacity-90" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full container">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="grow flex flex-col gap-y-8 pt-8 pb-8">
                  <Menu.Items className="w-full flex flex-col text-center">
                    <div className="flex flex-row items-center justify-between pb-8">
                      <Image
                        src={logoBookmark}
                        alt="Bookmark home"
                        width={148}
                        height={25}
                        style={{ fill: "fill-white" }}
                      />
                      <Menu.Item>
                        {({ close }) => (
                          <button onClick={close} className="p-4">
                            <span className="sr-only">Close menu</span>
                            <Image
                              src={iconClose}
                              alt=""
                              width={18}
                              height={15}
                              aria-hidden={true}
                            />
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    {menu.map((link) => (
                      <Menu.Item
                        as="a"
                        key={link.href}
                        href={link.href}
                        className="text-xl text-white tracking-widest uppercase py-6 border-b border-brand-grey-blue first-of-type:border-t"
                      >
                        {link.label}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                  <Button
                    theme="tertiary"
                    label="More Info"
                    className="text-xl text-white tracking-widest uppercase"
                  />
                  <nav aria-label="Social media" className="mt-auto">
                    <ul className="list-none flex flex-row items-center justify-center gap-x-10">
                      <li>
                        <Link
                          href="/"
                          className="text-white hover:text-brand-soft-red focus:text-brand-soft-red uppercase tracking-widest"
                        >
                          <Image
                            src={iconFacebook}
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden={true}
                            className="fill-red"
                          />
                          <span className="sr-only">Facebook</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-white hover:text-brand-soft-red focus:text-brand-soft-red uppercase tracking-widest"
                        >
                          <Image
                            src={iconTwitter}
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden={true}
                          />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition>
    </Menu>
  );
}
