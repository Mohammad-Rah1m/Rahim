import Image from 'next/image'
import React from 'react'

const Resume = () => {
  return (
    <div className="my-resume flex flex-col md:flex-row items-center py-20 px-5 xl:px-10 gap-10 xl:gap-20 bg-black">
        <div className="resume-image md:w-1/3">
          <Image
            id="logo"
            src="/images/resume.jpg" // Path to image in the public folder
            alt="Logo"
            className="cursor-pointer rounded-lg"
            width={500} // Specify a width to let Next.js calculate the height
            height={500}
          />
        </div>
        <div className="resume-text md:w-2/3">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            MY RESUME
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Real
            <span className="text-accent"> Problem Solutions </span>
            Experience
          </h2>
          <div className="resume-card flex flex-col xl:flex-row gap-5 justify-between bg-customGray p-5 mt-10 rounded-lg">
            <div className="flex flex-col gap-5">
              <div className="resume-item flex gap-5">
                <div>
                  <Image
                    id="logo"
                    src="/images/arrow-bg.svg" // Path to image in the public folder
                    alt="Logo"
                    className="cursor-pointer rounded-lg mt-1"
                    width={40} // Specify a width to let Next.js calculate the height
                    height={40}
                  />
                </div>
                <div>
                  <h6 className="text-gray-400">2024 - Present</h6>
                  <h3 className="text-white text-xl md:text-2xl mt-2">
                    Front End Developer
                  </h3>
                  <p className="text-gray-500">Skyline Tech Solutions</p>
                </div>
              </div>
              <div className="resume-item flex gap-5">
                <div>
                  <Image
                    id="logo"
                    src="/images/arrow-bg.svg" // Path to image in the public folder
                    alt="Logo"
                    className="cursor-pointer rounded-lg mt-1"
                    width={40} // Specify a width to let Next.js calculate the height
                    height={40}
                  />
                </div>
                <div>
                  <h6 className="text-gray-400">2023 - 2024</h6>
                  <h3 className="text-white text-xl md:text-2xl mt-2">
                    Web Developer
                  </h3>
                  <p className="text-gray-500">Icon Pro Digital Solutions</p>
                </div>
              </div>
            </div>
            <div className="resume-card-divider w-[1px] bg-gray-500 hidden xl:block"></div>
            <div className="flex flex-col gap-5">
              <div className="resume-item flex gap-5">
                <div>
                  <Image
                    id="logo"
                    src="/images/arrow-bg.svg" // Path to image in the public folder
                    alt="Logo"
                    className="cursor-pointer rounded-lg mt-1"
                    width={40} // Specify a width to let Next.js calculate the height
                    height={40}
                  />
                </div>
                <div>
                  <h6 className="text-gray-400">2023 - 2023</h6>
                  <h3 className="text-white text-xl md:text-2xl mt-2">
                    PSEB Internship
                  </h3>
                  <p className="text-gray-500">Icon Pro Digital Solutions</p>
                </div>
              </div>
              <div className="resume-item flex gap-5">
                <div>
                  <Image
                    id="logo"
                    src="/images/arrow-bg.svg" // Path to image in the public folder
                    alt="Logo"
                    className="cursor-pointer rounded-lg mt-1"
                    width={40} // Specify a width to let Next.js calculate the height
                    height={40}
                  />
                </div>
                <div>
                  <h6 className="text-gray-400">2022 - 2023</h6>
                  <h3 className="text-white text-xl md:text-2xl mt-2">
                    WordPress Developer
                  </h3>
                  <p className="text-gray-500">Bocoh Studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Resume
