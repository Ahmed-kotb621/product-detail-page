import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import usflag from "../assets/usflag.png";
import arrowdown from "../assets/arrowdown.png";
import whitearrow from "../assets/whitearrow.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import mail from "../assets/mail.png";
import DashedLine from "./DashedLine";
function Footer() {
  return (
    <div className="bg-grayLight px-[21px] pt-[72px] pb-8">
      <footer className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 pb-[72px] ">
          <div className=" col-span-2">
            <img src={logo} alt="logo" className="w-40 h-8 mb-10" />
            <form action="" className="border-b border-darkPrice flex w-fit">
              <input
                type="text"
                placeholder="Get latest offer to your inbox"
                className="border-none bg-transparent focus:outline-none mr-8 w-full  text-base font-medium text-[#787A7C] leading-[160%]"
              />
              <button
                type="submit"
                className=" bg-darkPrice px-4 py-2 rounded-lg"
              >
                <img src={whitearrow} alt="arrow" className="h-5 w-5" />
              </button>
            </form>
            {/* Social icons*/}
            <ul className="flex gap-6 items-center mt-5">
              <li>
                <Link
                  to="/"
                  className="bg-white w-9 h-9  rounded-full flex justify-center items-center"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-[1.125rem] h-[1.125rem]"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-white w-9 h-9  rounded-full flex justify-center items-center"
                >
                  <img
                    src={instagram}
                    alt="facebook"
                    className="w-[1.125rem] h-[1.125rem]"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-white w-9 h-9  rounded-full flex justify-center items-center"
                >
                  <img
                    src={twitter}
                    alt="facebook"
                    className="w-[1.125rem] h-[1.125rem]"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="bg-white w-9 h-9  rounded-full flex justify-center items-center"
                >
                  <img
                    src={mail}
                    alt="facebook"
                    className="w-[1.125rem] h-[1.125rem]"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-col gap-4">
              <li>
                <h3 className="md:text-sm text-[1.125rem] font-semibold text-darkPrice leading-6">
                  Shop
                </h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-col gap-4">
              <li>
                <h3 className="md:text-sm text-[1.125rem] font-semibold text-darkPrice leading-6">
                  Information
                </h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Frequently asked
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-col gap-4">
              <li>
                <h3 className="md:text-sm text-[1.125rem] font-semibold text-darkPrice leading-6">
                  Company
                </h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm font-normal text-darkPrice leading-[22px]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <DashedLine />
        <div className="mt-6 flex flex-col md:flex-row justify-between md:items-center">
          <p className="text-sm text-[#3E3E59]">
            &copy; John Lewis plc 2001 - 2024
          </p>
          <div className="flex gap-4 items-center  ml-auto">
            <div className="flex gap-2 items-center">
              <img src={usflag} alt="us" className="w-5 h-4" />
              <p className=" font-medium text-darkPrice text-sm">English</p>
              <button>
                <img src={arrowdown} alt="us" className="w-3 h-2" />
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <p className=" font-medium text-darkPrice text-sm">USD</p>
              <button>
                <img src={arrowdown} alt="us" className="w-3 h-2" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
