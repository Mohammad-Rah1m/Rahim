import Link from "next/link";
import { FaCircleChevronRight } from "react-icons/fa6";

const Button = ({ text, href }) => {
  return (
    <Link href={href}>
      <div className="bg-accent hover:bg-accentDark rounded-md flex w-max items-center gap-3 py-2 px-5 transition-colors duration-300 ease-in-out">
        <p className="font-medium">
        {text}
        </p>
        <FaCircleChevronRight/>
      </div>
    </Link>
  );
};

export default Button;
