import { useState } from "react";

import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      {/*============ Modal ==============*/}

      {/*=================== Header =====================*/}
      <header className="h-24 flex justify-between items-center px-10 max-w-[1400px] mx-auto bg-slate-100">
        <Link href="/">
          <h2 className="text-lg font-semibold lg:text-2xl">Next Shop.</h2>
        </Link>

        <div className="flex gap-2">
          <button className="btn px-10">Login with google</button>
        </div>
      </header>
      {children}
    </>
  );
};

export default Layout;
