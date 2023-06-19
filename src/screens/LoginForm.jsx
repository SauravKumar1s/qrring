import React from "react";
import MyButton, {
  GoogleButton,
  LoginButton,
} from "../components/atoms/Button/MyButton";
import BorderOr from "../components/atoms/lines/BorderOr";

const LoginForm = () => {
  const handleCreateAccount = () => {
    // Logic for creating a new account
  };

  const handleContinue = () => {
    // Logic for continuing with email
  };

  const handleSignInWithGoogle = () => {
    // Logic for signing in with Google
  };

  return (
    <section className="bg-black min-h-screen items-center justify-center flex">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-10 md:space-y-6 sm:p-8">
            <h1 className="font-bold leading-tight tracking-tight text-white text-5xl dark:text-white">
              Create your <br /> profile
            </h1>
            <form className="space-y-10 md:space-y-6">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#202020] text-white border text-2xl border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 placeholder-gray-100 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-4"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <LoginButton text="continious" />
              <BorderOr />
              <GoogleButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
