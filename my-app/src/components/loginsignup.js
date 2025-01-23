import React, { useState } from "react";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className="main flex flex-row w-full justify-between font-sans">
      <div className="form flex flex-col py-5 px-8 w-full lg:w-[50vw] max-h-screen h-auto overflow-hidden">
        <a className="w-fit" href="../">
          <div className="logo flex flex-row justify-start font-bold text-[#277D0D] items-center w-fit sm:px-14">
            <img
              className="h-10 lg:h-[4vw] w-fit px-[0.1vw]"
              src="./Logo.png"
              alt="Logo"
            />
            <div className="text-xl lg:text-[2.2vw]">
              <span className="text-[#8B024B]">twisca</span>
            </div>
          </div>
        </a>
        <div className="container w-full flex flex-col text-sm text-gray-400 sm:px-14">
          {showLogin ? (
            <form
              id="loginForm"
              className="flex flex-col pb-[0.5vh]"
              onSubmit={handleLogin}
            >
              <h1 className="h-[10%] text-3xl md:text-[3.4vw] font-bold text-black my-12 lg:my-[10vh]">
                Sign In
              </h1>

              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type="email"
                  id="email"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                  Email
                </label>
              </div>

              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="passwordField"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="passwordField"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-50"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    } z-50`}
                  ></i>
                </button>
              </div>

              <div className="flex flex-row justify-between items-center pb-[1vw] px-[0.25vw] text-[0.65rem] lg:text-[0.95vw]">
                <div
                  className="forget text-[#8B024B] font-semibold justify-end items-end flex w-full text-right cursor-pointer"
                  onClick={() => setShowLogin(false)}
                >
                  Forget Password
                </div>
              </div>

              <button className="bg-[#8B024B] text-[#F3F3F3] my-6 lg:my-0 h-10 lg:h-[4vw] rounded-[0.5vw] lg:text-[1.2vw] font-semibold">
                Sign In
              </button>
              <div className="flex justify-center h-fit pt-5 lg:pt-0 lg:h-[3.8vw] items-center cursor-pointer font-bold text-[#444444] text-xs lg:text-[0.95vw]">
                Need an account?{" "}
                <span
                  className="px-[0.25vw] text-[#8B024B] underline"
                  onClick={() => setShowLogin(false)}
                >
                  Create one
                </span>
              </div>
            </form>
          ) : (
            <form
              id="signupForm"
              className="flex flex-col pb-[1.2vw]"
              onSubmit={handleSignup}
            >
              <h1 className="text-3xl md:text-[3.4vw] font-bold text-black my-12 lg:mt-[3vh] lg:mb-[8vh] py-[5.2vh] lg:py-0">
                Sign Up
              </h1>
              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type="email"
                  id="email"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                  Email
                </label>
              </div>

              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="passwordField"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="passwordField"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-50"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    } z-50`}
                  ></i>
                </button>
              </div>
              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="passwordField"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="passwordField"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 z-50"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`bi ${
                      passwordVisible ? "bi-eye-slash" : "bi-eye"
                    } z-50`}
                  ></i>
                </button>
              </div>
              <button className="bg-[#8B024B] text-[#F3F3F3] my-6 lg:my-0 h-10 lg:h-[4vw] rounded-[0.5vw] lg:text-[1.2vw] font-semibold">
                Sign Up
              </button>
              <div
                className="flex justify-center h-[3.3vw] items-center cursor-pointer font-bold text-[#444444] text-xs lg:text-[0.95vw]"
                onClick={() => setShowLogin(true)}
              >
                Already have an account?{" "}
                <span className="px-1 text-[#8B024B] underline">Sign In</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
