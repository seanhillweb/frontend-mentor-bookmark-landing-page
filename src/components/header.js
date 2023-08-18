/**
 * Summary. Header for the landing page.
 */

import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Link from "next/link";
import logoBookmark from "@/public/logo-bookmark.svg";
import { menu } from "@/data/data";

export default function Header() {
  return (
    <header className="bg-white py-8 md:py-12" aria-label="Site" role="banner">
      <div className="container">
        <div className="flex flex-row items-center justify-between gap-x-10">
          <Link href="/">
            <Image
              src={logoBookmark}
              alt="Bookmark home"
              width={148}
              height={25}
              style={{ fill: "fill-white" }}
            />
          </Link>
          <nav className="hidden md:block md:ml-auto" aria-label="Main">
            <ul className="list-none flex flex-col md:flex-row items-center gap-y-6 md:gap-x-10 md:gap-y-0">
              {menu.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className=" text-sm text-brand-grey-blue hover:text-brand-soft-red focus:text-brand-soft-red uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/"
            className="hidden md:block py-3 px-6 rounded-md text-sm font-medium transition duration-200 ease-in-out border-2 border-brand-soft-red shadow-md hover:shadow-lg focus:shadow-lg bg-brand-soft-red hover:bg-white focus:bg-white text-white hover:text-brand-soft-red focus:text-brand-soft-red uppercase tracking-widest"
          >
            Login
          </Link>
          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
