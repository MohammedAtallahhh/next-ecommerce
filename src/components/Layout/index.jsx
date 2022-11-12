import Link from "next/link";
import { useState } from "react";

import { BsCart3, BsChevronDown } from "react-icons/bs";

const Layout = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const isAuth = false;
  return (
    <>
      {/*=================== Header =====================*/}
      <header className="h-24 flex justify-between items-center px-5 lg:px-10 max-w-[1400px] mx-auto bg-slate-100">
        <Link href="/">
          <h2 className="text-base font-semibold lg:text-2xl">Next Shop.</h2>
        </Link>

        <div className="flex gap-2">
          {/* Cart icon */}
          <Link href="/cart" className="flex justify-center items-center">
            <button className="lg:text-lg text-gray-800 mr-3 flex gap-2 items-center">
              <div className="relative">
                <BsCart3 size={28} />
                <span className="absolute top-[-50%] right-[-30%] flex justify-center items-center text-sm font-semibold bg-purple-700 text-white w-6 h-6 rounded-full">
                  3
                </span>
              </div>
              <span className="hidden lg:block text-gray-700 text-sm font-medium">
                Cart
              </span>
            </button>
          </Link>

          {/* login button */}
          {isAuth ? (
            <div className="relative">
              <button
                className="inline-flex items-center gap-2 text-gray-700 text-sm font-medium p-2"
                onClick={() => setDropdown(!dropdown)}
              >
                Settings
                <BsChevronDown
                  className={`${
                    dropdown ? "rotate-180" : "rotate-0"
                  } transition-all`}
                />
              </button>

              <div
                className={`${
                  dropdown ? "block" : "hidden"
                } absolute right-0 top-[110%] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}
              >
                <ul className="text-sm text-gray-700">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Profile
                    </a>
                  </li>

                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
