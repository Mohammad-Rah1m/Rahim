import Image from "next/image";
import Button from "@/components/Button";
// import LottieAnimation from "@/components/HeroAnimation.js";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
// import Marquee from "react-fast-marquee";
import Pricing from "@/components/Pricing";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Services from "@/components/Services";

export default function Home() {
  // const projectImages = [
  //   "/images/projects/thebackerhive.jpg",
  //   "/images/projects/Crowdfunderhub.jpg",
  //   "/images/projects/binary-patch.jpg",
  //   "/images/projects/skyline.jpg",
  //   "/images/projects/instatidy.jpg",
  //   "/images/projects/careride.jpg",
  // ];

  return (
    <div className="homepage">
      <div className="hero-section px-5 xl:px-10 2xl:px-52 lg:h-screen h-auto bg-black flex flex-col-reverse md:flex-row items-center pt-32 pb-20 justify-between">
        <div className="hero-text flex flex-col gap-2 lg:w-1/2">
          <h5 className="text-gray-500 text-xl text-center md:text-left md:text-2xl">
            Hello, I&apos;m
          </h5>
          <h1 className="text-accent text-center text-5xl font-semibold lg:text-6xl md:text-left">
            Mohammad Rahim.
          </h1>
          <h3 className="text-white text-center md:text-left text-2xl md:text-3xl lg:text-4xl">
            Web Designer &amp; Developer
          </h3>
          <p className="text-gray-300 mt-5 mb-5 text-center md:text-left">
            Looking to develop your site and boost your business?<br></br>{" "}
            You are in the right place!
          </p>
          <div className="flex justify-center md:justify-start">
            <Button text="Hire Me" href="/about" />
          </div>
        </div>
        <div className="hero-animation flex justify-center md:justify-end lg:w-1/2">
          {/* <LottieAnimation /> */}
        </div>
      </div>

      <div className="about-section px-5 py-20 flex flex-col-reverse md:flex-row md:items-center gap-10 bg-customDarkGray xl:px-10 xl:gap-20">
        <div className="about-text md:w-2/3">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            ABOUT ME
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Turning Ideas Into
            <span className="text-accent"> Functional Websites</span>
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            As a professional web designer and developer, I specialize in
            creating sleek, user-friendly digital products that enhance online
            experiences. With a keen eye for detail and a passion for
            innovation, I bring your vision to life through cutting-edge web
            solutions.
          </p>
          <div className="flex mt-10">
            <div className="flex items-center gap-2 w-1/3">
              <FaCheck className="text-accent text-2xl" />
              <p className="text-lg text-white">Design</p>
            </div>
            <div className="flex items-center gap-2 w-2/3">
              <FaCheck className="text-accent text-2xl" />
              <p className="text-lg text-white">Web Development</p>
            </div>
          </div>
          <div className="flex mt-3">
            <div className="flex items-center gap-2 w-1/3">
              <FaCheck className="text-accent text-2xl" />
              <p className="text-lg text-white">UI/UX</p>
            </div>
            <div className="flex items-center gap-2 w-2/3">
              <FaCheck className="text-accent text-2xl" />
              <p className="text-lg text-white">Project Management</p>
            </div>
          </div>
          <div className="about-contact flex flex-col lg:flex-row lg:justify-between xl:w-[80%] gap-5 bg-customGray rounded-lg p-5 mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-accent w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <MdOutlineEmail className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Email Me</p>
                <p className="text-white text-lg">rahimchangezi5@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <MdOutlineEmail className="text-2xl" />
              </div>
              <div>
                <p className="text-gray-400">Make a Call</p>
                <p className="text-white text-lg">+92-3138437243</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start mt-8">
            <Button text="About Me" href="/about" />
          </div>
        </div>
        <div className="about-image md:w-1/3">
          <Image
            id="logo"
            src="/images/about2.jpg" // Path to image in the public folder
            alt="Logo"
            className="cursor-pointer rounded-lg"
            width={500} // Specify a width to let Next.js calculate the height
            height={500}
          />
        </div>
      </div>

      <Resume />
      <Services />
      <Skills />

      <div className="projects py-20 bg-customDarkGray">
        <h6 className="font-medium text-gray-400 text-center">LATEST WORKS</h6>
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">
          Explore My Recent
          <span className="text-accent"> Projects </span>
        </h2>
        <div className="marquee mt-10">
          {/* <Marquee pauseOnHover speed={50} gradient={false} className="">
            {projectImages.map((src, index) => (
              <div key={index} className="mx-3">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={150}
                  className="rounded-lg cursor-pointer transition-transform duration-300"
                />
              </div>
            ))}
          </Marquee> */}
        </div>
        <div className="flex justify-center mt-10">
          <Button text="View More Projects" href="/projects" />
        </div>
      </div>

      <div className="pricing pb-20 px-5 xl:px-10 bg-customDarkGray">
        <h6 className="font-medium text-gray-400 text-center">PRICING</h6>
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">
          Amazing
          <span className="text-accent"> Pricing </span>
          For your Projects
        </h2>
        <div className="mt-10 flex justify-center">
          <Pricing />
        </div>
      </div>
    </div>
  );
}
