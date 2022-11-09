import Link from "next/link";

import { BsMinecartLoaded } from "react-icons/bs";

const Layout = ({ children }) => {
  return (
    <>
      {/*=================== Header =====================*/}
      <header className="h-24 flex justify-between items-center px-10 max-w-[1400px] mx-auto bg-slate-100">
        <Link href="/">
          <h2 className="text-lg font-semibold lg:text-2xl">Next Shop.</h2>
        </Link>

        <div className="flex gap-2">
          <Link href="/cart" className="flex justify-center items-center">
            <button className="text-lg text-gray-800 mr-3 flex gap-2 items-center">
              <div className="relative">
                <BsMinecartLoaded size={28} />
                <span className="absolute top-[-50%] right-[-30%] flex justify-center items-center text-sm font-semibold bg-black text-white w-6 h-6 rounded-full">
                  3
                </span>
              </div>
              Cart
            </button>
          </Link>
          <button className="btn">Sign in</button>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
