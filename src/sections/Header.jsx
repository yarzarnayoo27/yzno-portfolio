import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );
  return (
    <header className="px-[5%] py-[5px]">
      <div className="flex justify-between items-center h-[70px]">
        <div className="">
          <a
            href="#"
            className="flex items-center gap-3 text-white font-qurova font-bold text-3xl"
          >
            <div>
              <img src="/images/yzno.svg" alt="logo" width={25} height={32} />
            </div>
            <span className="flex justify-center items-center">YZNO</span>
          </a>
        </div>

        <nav>
          <ul className="flex gap-5 text-white">
            <a href="">
              <li>Hello</li>
            </a>
          </ul>
        </nav>

        <div className="text-white">
          <p>Button</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
