import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

import FormGroup from "../components/Layout/FormGroup";

import { validate } from "../utils";
import { postData } from "../utils/fetchData";
import { GlobalContext } from "../store/globalState";
import { actions } from "../store/actions";

const classes = {
  form: "mx-auto my-4 max-w-[500px] py-5",
  title: "font-semibold text-4xl mb-5 py-5 border-b border-b-gray-200",
};

const Register = () => {
  const initialUserData = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(GlobalContext);
  const { auth } = state;

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate(name, email, password, cf_password);

    if (validationError) {
      return toast.error(validationError);
    }

    const res = await postData("auth/register", userData);

    if (res.err) {
      return toast.error(res.err);
    }

    setUserData(initialUserData);

    router.push("/login");

    return toast.success(res.message);
  };

  useEffect(() => {
    if (Object.keys(auth.user).length !== 0) router.push("/");
  }, [auth]);

  // Classes
  const { form, title } = classes;
  return (
    <>
      <>
        <Head>
          <title>Register</title>
        </Head>

        <form className={form} onSubmit={handleSubmit}>
          <h2 className={title}>Register</h2>
          <FormGroup
            name="name"
            label={"Name"}
            value={name}
            onChange={handleInputChange}
          />

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

          <FormGroup
            name="cf_password"
            label={"Confirm password"}
            type="password"
            value={cf_password}
            onChange={handleInputChange}
          />

          <button type="submit" className="btn-full">
            Register
          </button>

          <p className="my-2">
            Already have an account?{" "}
            <Link href="/login" className="link">
              Login Now
            </Link>
          </p>
        </form>
      </>
    </>
  );
};

export default Register;
