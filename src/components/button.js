/**
 * Summary. Button component.
 *
 * Description. A simple link displayed as a button. This should be used for routing to other pages or locations.
 */

import Link from "next/link";

const ButtonDefault = "py-3 px-6 rounded-md text-center font-medium text-sm shadow-md shadow-brand-soft-blue/20 hover:shadow-lg focus:shadow-lg transition duration-200 ease-in-out";

const ButtonTheme = {
  primary: "text-white hover:text-brand-soft-blue focus:text-brand-soft-blue border-2 border-brand-soft-blue bg-brand-soft-blue hover:bg-white focus:bg-white",
  secondary: "text-white hover:text-brand-soft-red focus:text-brand-soft-red border-2 border-brand-soft-red bg-brand-soft-red hover:bg-white focus:bg-white",
  tertiary: "text-brand-dark-blue hover:text-brand-dark-blue focus:text-brand-dark-blue border-2 hover:border-brand-dark-blue focus:border-brand-dark-blue bg-brand-grey-blue/20 hover:bg-white focus:bg-white"
};

export default function Button({ className="", theme, label = "Label", url = "/" }) {

  const buttonDefault = ButtonDefault;
  const buttonTheme = ButtonTheme[theme];

  return (
    <Link
      href={url}
      className={`${buttonDefault} ${buttonTheme} ${className}`}
    >
      {label}
    </Link>
  );
}
