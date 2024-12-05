"use client";

import SubPageHero from "@/components/SubPageHero";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    emailjs
      .sendForm(
        "service_ls156ui",
        "template_vgg91bb",
        e.target, // The form element
        "3ZT1jTIKK0wp5YR9g"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email.");
        }
      );
  };

  return (
    <div>
      <SubPageHero
        title="Contact"
        image_url="/images/contact/contact-banner2.jpg"
      />
      <div className="form-container py-20 px-5 xl:px-10 flex justify-center items-center bg-customDarkGray">
        <div className="bg-customGray p-5 xl:p-10 rounded-lg w-full flex flex-col gap-5 md:flex-row xl:gap-10">
          <div className="h-60 md:h-auto md:w-1/2 bg-[url('/images/contact/contact.jpg')] bg-cover bg-center rounded-lg ">
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-400"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-400"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                >
                  <option value="" className="">
                    Select a service
                  </option>
                  <option value="wordpress">WordPress</option>
                  <option value="react">React</option>
                  <option value="nextjs">Next.js</option>
                </select>
              </div>

              {/* Message Text Area */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent text-black font-semibold py-2 px-4 rounded-md hover:bg-accent-dark focus:outline-none focus:ring focus:ring-accent-dark transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
