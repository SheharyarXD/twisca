import React from "react";

const HelloWorld = () => {
  return (
    <header className="px-[5vw] py-[3vh] flex justify-between w-full text-[0.9rem]">
        <div className="flex flex-row items-center w-[20vw]">
            <img className="h-[6vh] w-auto pr-2" src="./logo.png" alt="" />
        <div className="font-bold text-[1.5rem] text-[#8B024B]">
            twisca
        </div>
        </div>
        <div className="flex items-center w-[40vw]">
        <nav>
            <ul className="flex flex-row justify-between text-[#222222] ">
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>Home</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>Products</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>Occasions</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>About Us</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>Contact</a></li>
            </ul>
        </nav>
        </div>
        <div className="flex flex-row items-center w-[20vw]">
            <div className="font-bold"><i class="fa-solid fa-cart-shopping px-1.5 "></i>Cart <span className="rounded-full text-[#8B024B]">0</span></div>
            <div>
                <button className="mx-[1.5vw] font-semibold">Log In</button>
                <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] ">Sign Up<i class="fa-solid fa-arrow-right px-1"></i></button>
            </div>
        </div>
    </header>
  );
};

export default HelloWorld;
