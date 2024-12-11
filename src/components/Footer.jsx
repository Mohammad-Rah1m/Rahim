import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-black py-16 px-5 flex flex-col gap-8 justify-between lg:flex-row">
        <div className="footer-logo flex justify-center lg:w-1/4">
          <Link href="/">
            <Image
              id="logo"
              src="/images/logo-white.svg" // Path to image in the public folder
              alt="Logo"
              width={180}
              height={50}
            />
          </Link>
        </div>
        <div className="footer-menu text-center lg:w-1/4 lg:text-left">
          <h3 className="text-white text-2xl mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href={"/"}>
              <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                Home
              </p>
            </Link>
            <Link href={"/about"}>
              <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                About
              </p>
            </Link>
            <Link href={"/services"}>
              <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                Services
              </p>
            </Link>
            <Link href={"/projects"}>
              <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                Projects
              </p>
            </Link>
            <Link href={"/contact"}>
              <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className="footer-contact text-center lg:w-1/4 lg:text-left">
          <h3 className="text-white text-2xl mb-3">Get In Touch</h3>
          <div className="flex flex-col gap-2">
            <Link href={"tel:+923138437243"}>
              <div className="contact-item flex items-center justify-center lg:justify-start gap-2">
                <div>
                  <FaPhoneAlt className="text-accent" />
                </div>
                <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                  +92 3138437243
                </p>
              </div>
            </Link>
            <Link href={"mailto:rahimchangezi5@gmail.com"}>
              <div className="contact-item flex items-center justify-center lg:justify-start gap-2">
                <div>
                  <MdEmail className="text-accent" />
                </div>
                <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                  rahimchangezi5@gmail.com
                </p>
              </div>
            </Link>

            <div className="contact-item flex items-start justify-center lg:justify-start gap-2">
              <div>
                <FaMapMarkerAlt className="text-accent mt-1" />
              </div>
              <p className="text-gray-400 hover:text-accent cursor-pointer transition-colors duration-300 ease-in-out">
                DHA Phase 1 H Sector, Lahore Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="footer-social text-center lg:text-left lg:w-1/4">
          <h3 className="text-white text-2xl mb-3">Social Links</h3>
          <div className="flex flex-col gap-2">
            <Link
              href={"https://www.instagram.com/mohammadrah1m/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-item flex items-center justify-center lg:justify-start gap-2">
                <FaInstagram className="text-accent" />
                <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                  Instagram
                </p>
              </div>
            </Link>
            {/* <Link
          href={"https://github.com/Mohammad-Rah1m"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-item flex items-center justify-center lg:justify-start gap-2">
            <FaGithub className="text-accent" />
            <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
              Github
            </p>
          </div>
        </Link> */}
            <Link
              href={"https://www.linkedin.com/in/mohammad-rah1m/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-item flex items-center justify-center lg:justify-start gap-2">
                <FaLinkedinIn className="text-accent" />
                <p className="text-gray-400 hover:text-accent transition-colors duration-300 ease-in-out">
                  LinkedIn
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white px-5 py-5">
        <p className="text-center">Designed & Developed by <strong>Mohammad Rahim</strong></p>
        </div>
    </div>
  );
};

export default Footer;
