"use client";

/**
 * Summary. A simple newsletter signup form.
 *
 * Description. A banner that displays a signup form for users to submit their email to recieve updates from a distributed newsletter.
 */

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function NewsletterSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-brand-soft-blue py-20">
      <div className="container">
        <div className="flex flex-col items-center max-w-lg mx-auto">
          <div className="w-full text-center">
            <p className="text-base text-white uppercase tracking-widest">
              35,000+ already joined
            </p>
            <h2 className="text-4xl font-medium text-white my-8">
              Stay up-to-date with what we&apos;re doing
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex flex-col md:grow">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  type="text"
                  className={`z-10 text-sm rounded-md p-3 border-2 focus:ring-inherit ${
                    errors.email
                      ? "border-brand-soft-red hover:border-brand-soft-red focus:border-brand-soft-red"
                      : "border-transparent hover:border-transparent focus:border-transparent"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Can't be blank",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Whoops, make sure it's an email",
                    },
                  })}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  render={({ message }) => (
                    <p
                      role="alert"
                      className="z-0 text-left text-white text-xs font-medium italic bg-brand-soft-red rounded-bl-md rounded-br-md px-3 pt-3 pb-[6px] -mt-2"
                    >
                      {message}
                    </p>
                  )}
                />
              </div>
              <input
                type="submit"
                value="Contact Us"
                className="py-3 px-6 rounded-md text-sm font-medium transition duration-200 ease-in-out border-2 border-brand-soft-red shadow-md hover:shadow-lg focus:shadow-lg bg-brand-soft-red hover:bg-white focus:bg-white text-white hover:text-brand-soft-red focus:text-brand-soft-red cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
