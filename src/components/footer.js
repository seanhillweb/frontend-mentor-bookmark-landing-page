/**
 * Summary. Footer for the landing page.
 */

import Image from "next/image";
import Link from "next/link";
import logoBookmark from "@/public/logo-bookmark-footer.svg";
import iconFacebook from "@/public/icon-facebook.svg";
import iconTwitter from "@/public/icon-twitter.svg";
import { menu } from "@/data/data";

export default function Footer() {
  return (
    <footer
      className="bg-brand-dark-blue text-brand-grey-blue py-8 md:py-6"
      aria-label="Site"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center py-4 gap-x-10">
          <Link href="/">
            <Image
              src={logoBookmark}
              alt="Bookmark home"
              width={148}
              height={25}
              style={{ fill: "fill-white" }}
            />
          </Link>
          <nav className="my-8 md:my-0" aria-label="Footer">
            <ul className="list-none flex flex-col md:flex-row items-center gap-y-6 md:gap-x-10 md:gap-y-0">
              {menu.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-brand-soft-red focus:text-brand-soft-red uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Social media" className="md:ml-auto">
            <ul className="list-none flex flex-row items-center gap-x-10">
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
      </div>
    </footer>
  );
}
