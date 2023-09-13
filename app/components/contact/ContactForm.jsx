"use client";

import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    project_name: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Here is the information you entered: Name: ${formData.first_name} ${formData.last_name}, Email: ${formData.email}, Project Name: ${formData.project_name}, Message: ${formData.message}`
    );
  };

  return (
    <section className="md:w-[50rem] md:h-[50rem] flex flex-col">
      <form
        onSubmit={handleSubmit}
        className="md:w-full bg-gray-950 text-white bg-opacity-70 p-4 md:py-8"
      >
        <div className="flex items-center md:w-full gap-4">
          <h3 className="text-xl text-center md:text-left md:pt-3 md:pb-6 w-full md:text-3xl text-orange-100 font-semibold md:font-extrabold tracking-wider uppercase">
            request form
          </h3>
        </div>
        <div className="py-1 md:py-4">
          <label htmlFor="senders-email" className="text-sm">
            email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="py-1 md:py-4 md:w-full">
            <label htmlFor="first-name" className="text-sm">
              first name
            </label>
            <input
              type="text"
              name="first_name"
              defaultValue={formData.first_name}
              onChange={handleChange}
              className="w-full h-[2rem] px-2 bg-transparent border border-white"
              required
            />
          </div>
          <div className="py-1 md:py-4 md:w-full">
            <label htmlFor="last-name" className="text-sm">
              last name
            </label>
            <input
              type="text"
              name="last_name"
              defaultValue={formData.last_name}
              onChange={handleChange}
              className="w-full h-[2rem] px-2 bg-transparent border border-white"
              required
            />
          </div>
        </div>

        <div className="py-1 md:py-4">
          <label htmlFor="project-name" className="text-sm">
            project name
          </label>
          <input
            type="text"
            name="project_name"
            defaultValue={formData.project_name}
            onChange={handleChange}
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <div className="py-1 md:py-4">
          <label htmlFor="phone-number" className="text-sm">
            phone #
          </label>
          <input
            type="tel"
            name="phone"
            defaultValue={formData.email}
            onChange={handleChange}
            className="w-full h-[2rem] px-2 bg-transparent border border-white"
            required
          />
        </div>

        <legend className="py-2 md:py-4 text-center text-sm md:text-xl">
          Which recording package are you interested in?
        </legend>
        <div className="grid grid-cols-2 md:flex md:pb-4 justify-center gap-6 text-sm">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="demo"
              data-ripple-dark="true"
            >
              <input
                id="demo"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-white uppercase"
              htmlFor="demo"
            >
              demo
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="basic"
            >
              <input
                id="basic"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-white uppercase"
              htmlFor="basic"
            >
              basic
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="standard"
            >
              <input
                id="standard"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-white uppercase"
              htmlFor="standard"
            >
              standard
            </label>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="pro"
            >
              <input
                id="html"
                name="type"
                type="radio"
                onChange={() => setToggle(false)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-white uppercase"
              htmlFor="pro"
            >
              pro
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="custom"
              data-ripple-dark="true"
            >
              <input
                id="custom"
                name="type"
                type="radio"
                onChange={() => setToggle(!toggle)}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-emerald-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-emerald-500 checked:before:bg-emerald-500 hover:before:opacity-10"
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-emerald-200 opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-white uppercase"
              htmlFor="custom"
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
              defaultValue={formData.message}
              onChange={handleChange}
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
