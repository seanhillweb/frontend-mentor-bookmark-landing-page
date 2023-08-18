/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import Attribution from "@/components/attribution";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Bookmark landing page",
  description: "Built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
        <Attribution />
      </body>
    </html>
  );
}
