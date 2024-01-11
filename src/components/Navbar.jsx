/* eslint-disable no-unused-vars */
import logo from "../assets/icons/logo.svg";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary">
      <div className="text-lg container mx-auto flex justify-between items-center font-medium">
        <div className="flex space-x-14 items-center">
          <a
            href="/"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span>XYZ</span>
          </a>
          <ul className="md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className="block hover:text-gray-300">
                {link}
              </a>
            ))}
          </ul>
        </div>
        <div className="space-x-12 hidden md:flex items-center">
          <a
            href="/"
            className="hidden lg:flex items-center hover:text-secondary"
          >
            <GrLanguage className="mr-2" /> <span>Language</span>
          </a>
          <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
