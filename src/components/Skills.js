import React from 'react'
import Button from "@/components/Button";
import SkillsCart from "@/components/SkillsCart";

const Skills = () => {
  return (
    <div className="my-skills py-20 px-5 xl:px-10 bg-black flex flex-col md:flex-row items-center gap-10">
        <div className="skills-text md:w-[40%]">
          <h6 className="font-medium text-gray-400 text-center md:text-left">
            MY SKILLS
          </h6>
          <h2 className="text-white text-3xl md:text-4xl text-center md:text-left font-semibold">
            Let’s Explore Popular
            <span className="text-accent"> Skills & Experience </span>
          </h2>
          <p className="text-gray-400 text-center md:text-left">
            As a web developer with a strong foundation in both web development
            and web design, I possess a diverse skill set that spans front-end
            and back-end technologies
          </p>
          <div className="mt-5 hidden md:block">
            <Button text="Learn More" href="/about" />
          </div>
        </div>
        <div className="skills-cart w-full md:w-[60%]">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex gap-5 lg:w-full">
              <SkillsCart
                imagePath="/images/projects/skyline.jpg"
                skillName="React"
                skillNum="80%"
              />
              <SkillsCart
                imagePath="/images/skills/next-js.svg"
                skillName="NextJS"
                skillNum="80%"
              />
            </div>
            <div className="flex gap-5 lg:w-full">
              <SkillsCart
                imagePath="/images/skills/wordpress.png"
                skillName="WordPress"
                skillNum="90%"
              />
              <SkillsCart
                imagePath="/images/skills/html.png"
                skillName="HTML"
                skillNum="95%"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 lg:flex-row">
            <div className="flex gap-5 lg:w-full">
              <SkillsCart
                imagePath="/images/skills/java-script.png"
                skillName="React"
                skillNum="90%"
              />
              <SkillsCart
                imagePath="/images/skills/css-3.png"
                skillName="CSS"
                skillNum="90%"
              />
            </div>
            <div className="flex gap-5 lg:w-full">
              <SkillsCart
                imagePath="/images/skills/figma.png"
                skillName="Figma"
                skillNum="70%"
              />
              <SkillsCart
                imagePath="/images/skills/node-js.png"
                skillName="NodeJS"
                skillNum="60%"
              />
            </div>
          </div>
          <div className="mt-10 flex justify-center md:hidden">
            <Button text="Learn More" href="/about" />
          </div>
        </div>
      </div>
  )
}

export default Skills
