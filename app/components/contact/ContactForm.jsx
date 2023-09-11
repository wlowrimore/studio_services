"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="w-full h-auto flex flex-col">
      <form className="bg-gray-950 text-white bg-opacity-70 p-4">
        <div className="py-1">
          <label htmlFor="senders-email" className="text-sm">
            email
          </label>
          <input
            type="email"
            name="email"
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="py-1">
            <label htmlFor="first-name" className="text-sm">
              first name
            </label>
            <input
              type="text"
              name="first-name"
              className="w-full h-[2rem] px-2 bg-transparent border border-white"
              required
            />
          </div>
          <div className="py-1">
            <label htmlFor="last-name" className="text-sm">
              last name
            </label>
            <input
              type="text"
              name="last-name"
              className="w-full h-[2rem] px-2 bg-transparent border border-white"
              required
            />
          </div>
        </div>

        <div className="py-1">
          <label htmlFor="project-name" className="text-sm">
            project name
          </label>
          <input
            type="text"
            name="project-name"
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <div className="py-1">
          <label htmlFor="phone-number" className="text-sm">
            phone #
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <legend className="py-2 text-center text-sm">
          Which recording package are you interested in?
        </legend>
        <div class="grid grid-cols-2 justify-center gap-6 text-sm">
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="demo"
              data-ripple-dark="true"
            >
              <input
                id="demo"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-white uppercase"
              for="demo"
            >
              demo
            </label>
          </div>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="basic"
            >
              <input
                id="basic"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-white uppercase"
              for="basic"
            >
              basic
            </label>
          </div>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="standard"
            >
              <input
                id="standard"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-white uppercase"
              for="standard"
            >
              standard
            </label>
          </div>
          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="pro"
            >
              <input
                id="html"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-white uppercase"
              for="pro"
            >
              pro
            </label>
          </div>

          <div class="inline-flex items-center">
            <label
              class="relative flex cursor-pointer items-center rounded-full p-3"
              for="custom"
              data-ripple-dark="true"
            >
              <input
                id="custom"
                name="type"
                type="radio"
                onChange={() => setToggle(!toggle)}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-white uppercase"
              for="custom"
            >
              custom
            </label>
          </div>
        </div>

        {toggle && (
          <div className="w-full py-2">
            <h2 className="py-2 uppercase">
              Please briefly describe your request
            </h2>
            <textarea
              htmlFor="message"
              name="message"
              rows="5"
              className="w-full text-black p-2"
            />
          </div>
        )}

        <div className="flex gap-3 py-3 w-full">
          <button
            type="submit"
            className="w-full py-2 px-2 text-xl bg-emerald-800 bg-opacity-30 border border-white rounded-md uppercase hover:bg-opacity-50"
          >
            send
          </button>
          <button
            type="submit"
            className="w-full py-2 px-2 text-xl bg-red-800 bg-opacity-30 border border-white rounded-md uppercase hover:bg-opacity-50"
          >
            clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
