import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import FormGroup from "../components/Layout/FormGroup";

const Login = () => {
  const initialUserData = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const { email, password } = userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <form
        className="mx-auto my-4 max-w-[500px] py-5"
        // onSubmit={handleSubmit}
      >
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
