import React from "react";
import Head from "next/head";
import { Layout } from "../components";
import Link from "next/link";
import FormGroup from "../components/Layout/FormGroup";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Sign in Page</title>
      </Head>

      <form
        className="mx-auto my-4 max-w-[500px] py-5"
        // onSubmit={handleSubmit}
      >
        <h2 className="font-semibold text-4xl mb-5 py-5 border-b border-b-gray-200">
          Login
        </h2>
        <FormGroup label={"Email Address"}>
          <small className="text-gray-500">
            We'll never share your email with anyone else.
          </small>
        </FormGroup>

        <FormGroup label={"Password"} type="password" />

        <button
          type="submit"
          className="btn rounded-none w-full max-w-none text-base mt-3"
        >
          Login
        </button>

        <p className="my-2">
          You don't have an account?{" "}
          <Link href="/register" className="link">
            Register Now
          </Link>
        </p>
      </form>
    </Layout>
  );
};

export default Login;
