"use client"

import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import iconHamburger from "@/public/icon-hamburger.svg";
import iconClose from "@/public/icon-close.svg";

import { menu } from "@/data/data";

export default function MobileMenu() {
  return (
    <Menu>
      <Menu.Button>Options</Menu.Button>
      <Menu.Items>
        {menu.map((link) => (
          <Menu.Item
            as="a"
            key={link.href}
            href={link.href}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
          >
            {link.label}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}