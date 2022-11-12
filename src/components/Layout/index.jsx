import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Cookies from "js-cookie";

import { BsCart3, BsChevronDown } from "react-icons/bs";
import { actions } from "../../store/actions";
import { GlobalContext } from "../../store/globalState";

const Layout = ({ children }) => {
  const [dropdown, setDropdown] = useState(false);
  const { state, dispatch } = useContext(GlobalContext);

  const { user, loading } = state.auth;

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: actions.AUTH, payload: {} });
    return router.push("/login");
  };

  return (
    <>
      {/*=================== Header =====================*/}
      <header className="h-24 flex justify-between items-center px-5 lg:px-10 max-w-[1400px] mx-auto bg-slate-100">
        <Link href="/">
          <h2 className="text-base font-semibold lg:text-2xl">Next Shop.</h2>
        </Link>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
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
            {user ? (
              <div className="relative">
                <button
                  className="inline-flex items-center lg:gap-2 text-gray-700 text-sm font-medium p-2"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <img
                    src={user.avatar}
                    alt="user avatar"
                    className="w-10 rounded-full"
                  />
                  <span className="hidden lg:inline-block">{user.name}</span>

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
                    <li onClick={() => setDropdown(false)}>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Profile
                      </a>
                    </li>

                    <li onClick={() => setDropdown(false)}>
                      <button
                        className="block w-full text-left py-2 px-4 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
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
        )}
      </header>
      {children}
    </>
  );
};

export default Layout;
