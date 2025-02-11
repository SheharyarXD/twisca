import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import emailjs from "@emailjs/browser";


const LoginPage = () => {
      const navigate=useNavigate()
  const {
    user,userid, login, signup, logout, loading, error
  } = useContext(AuthContext);
  const [email,setEmail]=useState(null)
  const [showResetModal, setShowResetModal] = useState(false);

  const [password,setPassword]=useState(null)
  const [confirmPassword,setConfirmPassword]=useState(null)
  const [showLogin, setShowLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verificationCodes, setVerificationCode] = useState(null);
const [userEnteredCode, setUserEnteredCode] = useState("");

const handleSignup = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Generate a verification code
  const generatedCode = Math.floor(100000 + Math.random() * 900000);
  setVerificationCode(generatedCode);

  const templateParams = {
    email: email,
    verificationCode: generatedCode,
  };

  // Send email with the verification code
  emailjs
    .send("xdgaming", "template_n0ejzqc", templateParams)
    .then((response) => {
      alert("Verification code sent to your email.");
    })
    .catch((error) => {
      console.error("Email sending failed", error);
      alert("Failed to send verification code. Please try again.");
    });
};

// Function to verify the entered code
const verifyCodeAndSignup = async () => {
  if (parseInt(userEnteredCode) !== verificationCodes) {
    alert("Invalid verification code!");
    window.location.reload();
    return;
  }

  // Proceed with signup
  try {
    const response = await fetch("https://twisca-gpel.vercel.app/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert(data.error || "Signup failed.");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("An error occurred. Please try again.");
  }
};
  let verificationCode; 
let resetemail; 
// Show the Reset Password modal
const showResetPasswordForm=()=>{
  setShowResetModal(true)
}

// Hide the Reset Password modal
const closeResetPasswordForm=()=>{
  setShowResetModal(false)
}


emailjs.init("OfmlMCjmuKg7pjl35");
 const sendVerificationCode=async(event) =>{
    event.preventDefault(); 

    const email = document.getElementById('resetEmail').value;
    resetemail=email
    const verificationCode1 = generateRandomSixDigitNumber();
    verificationCode=verificationCode1;
    const templateParams = {
        email: email,
        verificationCode: verificationCode1
    };

    // Send the email using EmailJS
    emailjs.send("xdgaming", "template_n0ejzqc", templateParams)
        .then(function(response) {
            // Handle the response from EmailJS
            // console.log('SUCCESS!', response.status, response.text);
            alert('Password reset link sent to your email!');
            document.getElementById('step1').classList.add('hidden');
            document.getElementById('step2').classList.remove('hidden');
        }, function(error) {
            // Handle errors
            console.error('FAILED...', error);
            alert('Failed to send reset link. Please try again.');
        });
}

const generateRandomSixDigitNumber=()=> {
    return Math.floor(100000 + Math.random() * 900000);
}

// Step 2: Verify Code and Reset Password
 const resetPassword=async (event)=> {
    event.preventDefault();

    const enteredCode = document.getElementById('verificationCode').value.trim();
    const newPassword = document.getElementById('resetNewPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPasswordreset').value.trim();

    if (enteredCode.toString() !== verificationCode.toString()) {
        alert('Invalid verification code!');
        return;
    }
 

    if (newPassword.toString() !== confirmPassword.toString()) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const email=resetemail
        const response = await fetch('https://twisca-gpel.vercel.app/api/auth/reset-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, newPassword }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Password reset successfully!');
            closeResetPasswordForm();
        } else {
            alert(data.error || 'Failed to reset password');
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        alert('An error occurred. Please try again.');
    }
}

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   // Handle signup logic
  // };

  return (
    <div className="main flex flex-row w-full justify-between font-sans">
      {showResetModal&&
      <div id="resetPasswordModal" className=" fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative">
        <h2 className="text-lg font-bold mb-4">Reset Password</h2>
        <i className="fa fa-close hover:text-red-600 cursor-pointer absolute right-3 top-2 text-xl" onClick={()=>closeResetPasswordForm()}></i>

        <div id="step1">
            <form id="emailForm" onSubmit={(event)=>{sendVerificationCode(event)}}>
                <label htmlFor="email" className="block font-semibold mb-2">Email:</label>
                <input
                    type="email"
                    id="resetEmail"
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Enter your email"
                    required
                />
                <div className="flex justify-end">
                    <button 
                        type="submit" 
                        className="bg-[#8B024B] text-white px-4 py-2 rounded-lg"
                    >
                        Send Code
                    </button>
                </div>
            </form>
        </div>


        <div id="step2" className="hidden">
            <form id="resetPasswordForm" onSubmit={(event)=>{resetPassword(event)}}>
                <label htmlFor="verificationCode" className="block font-semibold mb-2">Verification Code:</label>
                <input
                    type="text"
                    id="verificationCode"
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Enter the code sent to your email"
                    required
                />

                <label htmlFor="newPassword" className="block font-semibold mb-2">New Password:</label>
                <input
                    type="password"
                    id="resetNewPassword"
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Enter new password"
                    required
                />

                <label htmlFor="confirmPasswordreset" className="block font-semibold mb-2">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPasswordreset"
                    className="w-full p-2 border rounded-lg mb-4"
                    placeholder="Confirm new password"
                    required
                />

                <div className="flex justify-end gap-4">
                    <button 
                        type="button" 
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                        onClick={()=>closeResetPasswordForm()}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className="bg-[#8B024B] text-white px-4 py-2 rounded-lg"
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
}
      <div className="form flex flex-col py-5 px-8 w-full lg:w-[50vw] max-h-screen h-auto overflow-hidden">
        <a className="w-fit" href="../">
          <div className="logo flex flex-row justify-start font-bold text-[#277D0D] items-center w-fit sm:px-14">
            <img
              className="h-10 lg:h-[4vw] w-fit px-[0.1vw]"
              src="./logo.png"
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
              <h1 className="h-[10%]  text-[#8B024B] allura-regular text-3xl md:text-[4.5vw] font-bold my-12 lg:my-[10vh]">
                Sign In
              </h1>

              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onClick={() => showResetPasswordForm()}
                >
                  Forget Password
                </div>
              </div>

              <button onClick={
                async ()=>{const success=await login(email,password);if(success){navigate("/");}else{alert("Login Failed");console.log("s",success)}}
                }
                 className="bg-[#8B024B] text-[#F3F3F3] my-6 lg:my-0 h-10 lg:h-[4vw] rounded-[0.5vw] lg:text-[1.2vw] font-semibold">
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
              <h1 className="text-3xl text-[#8B024B] allura-regular  md:text-[4.5vw] font-bold  my-12 lg:mt-[3vh] lg:mb-[8vh] py-[5.2vh] lg:py-0">
                Sign Up
              </h1>
              <div className="form-group mb-5 lg:mb-[1.8vh] relative">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id="passwordField"
                  className="peer h-10 lg:h-[4.9vw] form-control block w-full px-[1vw] py-[0.8vw] lg:text-[1.2vw] text-gray-900 bg-transparent border border-gray-300 rounded-[0.5vw] appearance-none focus:outline-none focus:ring-0 focus:border-[#8B024B]"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="passwordField"
                  className="form-label bg-white px-[0.25vw] absolute text-xs lg:text-[1.4vw] text-gray-500 duration-300 transform -translate-y-[2vw] top-[1.6vw] left-[1vw] z-10 origin-[0] peer-focus:left-[1vw] peer-focus:text-[#8B024B] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[0vw] peer-focus:-translate-y-[2.6vw] p-[0.1vw]"
                >
                 Confirm Password
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
              <button 
                className="bg-[#8B024B] text-[#F3F3F3] my-6 lg:my-0 h-10 lg:h-[4vw] rounded-[0.5vw] lg:text-[1.2vw] font-semibold">
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
      {showLogin?(

        <div  className="img  w-[50vw] hidden lg:flex">
            <img className="image w-full h-full max-h-screen object-cover min-h-screen" src="../Images/signin.png" alt=""/>
        </div>
  ):(
    <div  className="img  w-[50vw] hidden lg:flex">
    <img className="image w-full h-full max-h-screen object-cover min-h-screen" src="../Images/signup.png" alt=""/>
</div>
  )}

{verificationCodes && (
  <div className="absolute inset-0 top-[30vh] bg-white h-fit rounded-md shadow-lg shadow-black p-5 md:w-[50vw] mx-auto">
  <div className="form-group mb-5 relative">
    <input
      type="text"
      onChange={(e) => setUserEnteredCode(e.target.value)}
      className="peer h-10 form-control block w-full px-4 py-2 text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-[#8B024B]"
      placeholder="Enter verification code"
      required
      />
    <button
      type="button"
      onClick={verifyCodeAndSignup}
      className="bg-[#8B024B] text-white px-4 py-2 rounded-lg mt-3"
      >
      Verify & Signup
    </button>
  </div>
      </div>
)}

    </div>
  );
};

export default LoginPage;
