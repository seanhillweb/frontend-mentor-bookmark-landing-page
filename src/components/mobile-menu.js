"use client"

import { Menu } from "@headlessui/react";
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