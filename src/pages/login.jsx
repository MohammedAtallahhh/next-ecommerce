import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FormGroup from "../components/Layout/FormGroup";
import { actions } from "../store/actions";
import { toast } from "react-toastify";
import { GlobalContext } from "../store/globalState";
import { useRouter } from "next/router";
import { postData } from "../utils/fetchData";
import Cookies from "js-cookie";

const Login = () => {
  const initialUserData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const { email, password } = userData;

  const { state, dispatch } = useContext(GlobalContext);
  const { auth } = state;

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ email });
    const res = await postData("auth/login", userData);

    if (res.err) return toast.error(res.err);

    toast.success(res.message);

    dispatch({
      type: actions.AUTH,
      payload: {
        // token: res.access_token,
        user: res.user,
        // loading: false,
      },
    });

    // Cookies.set("refreshtoken", res.refresh_token, {
    //   path: "api/auth/token",
    //   expires: 7,
    // });
  };

  useEffect(() => {
    if (Object.keys(auth.user).length) router.push("/");
  }, [auth]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <form className="mx-auto my-4 max-w-[500px] py-5" onSubmit={handleSubmit}>
        <h2 className="font-semibold text-4xl mb-5 py-5 border-b border-b-gray-200">
          Login
        </h2>
        <FormGroup
          name="email"
          label={"Email Address"}
          value={email}
          onChange={handleInputChange}
        >
          <small className="text-gray-500">
            We'll never share your email with anyone else.
          </small>
        </FormGroup>

        <FormGroup
          name="password"
          label={"Password"}
          type="password"
          value={password}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn-full">
          Login
        </button>

        <p className="my-2">
          You don't have an account?{" "}
          <Link href="/register" className="link">
            Register Now
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
