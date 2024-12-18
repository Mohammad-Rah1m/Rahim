import Link from "next/link";
import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({ text, href, tab }) => {
  return (
    <Link
      href={href}
      target={tab ? "_blank" : "_self"}
      rel={tab ? "noopener noreferrer" : undefined}
    >
      <div className="bg-accent hover:bg-accentDark rounded-md flex w-max items-center gap-3 py-2 px-5 transition-colors duration-300 ease-in-out">
        <p className="font-medium text-black">{text}</p>
        <FaCircleChevronRight className="text-black"/>
      </div>
    </Link>
  );
};

export default Button;
