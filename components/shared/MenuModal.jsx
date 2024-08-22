import Link from "next/link";
import logoLight from "../../public/images/logo.png";
import logoLight2 from "../../public/images/logo2.png";
import MenuIcon from '../../public/images/menu.svg';
import { FiX } from "react-icons/fi";
import Image from "next/image";
import HeaderButton from "./HeaderButton";

const MenuModal = ({ showMenu, toggleMenu }) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between lg:px-0 ${
          showMenu ? "hidden" : "block"
        } lg:flex`}
      >
        <Link href="/">
          <div className="flex flex-row ">
            <Image
              src={logoLight}
              className="inline w-[180px] cursor-pointer lg:block hidden"
              alt="Logo"
            />
            <Image
              src={logoLight2}
              className="inline w-[180px] cursor-pointer lg:hidden"
              alt="Logo"
            />
          </div>
        </Link>

        <div className="lg:hidden flex items-center justify-center">
          <Link
            href="https://calendly.com/outreach-bostoninnovations/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
								orbitron

								font-medium
								text-[17px]
								text-[#FFF]
								leading-[20px]
								bg-[#FE5A36]
								rounded-[5px]
								px-[18px]
								py-[8px]
								gap-[5px]
								w-auto
								hover:bg-[#FF3D12]
								transition
								duration-300
                mr-4
							"
            >
              Get Started
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            
              {showMenu ? (
                <FiX className="text-3xl" />
              ) : (
                <Image
              src={MenuIcon}
              className="inline w-[30px] cursor-pointer "
              alt="Logo"
            />
              )}
        
          </button>
        </div>
      </div>

      <div
        className={`absolute h-[100%] top-0 left-0 bg-[#061927] w-auto right-0 opacity-95 p-5 shadow-lg rounded-lg ${
          showMenu ? "block" : "hidden"
        } xl:hidden`}
        style={{ boxShadow: "0 2px 4px #00000080" }}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-row w-[250px] p-5">
              <Image
                src={logoLight}
                className="inline cursor-pointer w-[180px] h-[30px]"
                alt="Logo"
              />
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:outline-none"
            aria-label="Hamburger Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current h-7 w-7 text-secondary-light dark:text-ternary-light"
            >
              <FiX className="text-3xl" />
            </svg>
          </button>
        </div>
        {["Home", "Services", "Portfolio", "Team", "Contact"].map(
          (title, index) => (
            <>
              {title === "Home" ? (
                <Link href={""} aria-label={title}>
                  <HeaderButton title={title} index={index} />
                </Link>
              ) : title === "Services" ? (
                <Link href={"services"} aria-label={title}>
                  <HeaderButton title={title} index={index} />
                </Link>
              ) : title === "Portfolio" ? (
                <Link href={"portfolio"} aria-label={title}>
                  <HeaderButton title={title} index={index} />
                </Link>
              ) : title === "Team" ? (
                <Link href={"team"} aria-label={title}>
                  <HeaderButton title={title} index={index} />
                </Link>
              ) : title === "Contact" ? (
                <Link href={"contact"} aria-label={title}>
                  <HeaderButton title={title} index={index} />
                </Link>
              ) : (
                ""
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default MenuModal;
