import React from "react";
import Head from "next/head";
import { Layout } from "../components";
import Link from "next/link";
import FormGroup from "../components/Layout/FormGroup";

const Register = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>Register Page</title>
        </Head>

        <form
          className="mx-auto my-4 max-w-[500px] py-5"
          // onSubmit={handleSubmit}
        >
          <h2 className="font-semibold text-4xl mb-5 py-5 border-b border-b-gray-200">
            Register
          </h2>
          <FormGroup label={"Name"} />

          <FormGroup label={"Email Address"}>
            <small className="text-gray-500">
              We'll never share your email with anyone else.
            </small>
          </FormGroup>

          <FormGroup label={"Password"} type="password" />

          <FormGroup label={"Confirm password"} type="password" />

          <button
            type="submit"
            className="btn rounded-none w-full max-w-none text-base mt-3"
          >
            Register
          </button>

          <p className="my-2">
            Already have an account?{" "}
            <Link href="/login" className="link">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
