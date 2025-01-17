import React from "react";

const HelloWorld = () => {
  return (
    <header className="px-[5vw] py-[2vh] flex justify-between">
        <div className="flex flex-row items-center ">
            <img className="h-[6vh] w-auto pr-2" src="./logo.png" alt="" />
        <div className="font-bold text-[1.5rem] text-[#8B024B]">
            twisca
            </div>
        <div>
        </div>
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>Products</a></li>
                <li><a>Occasions</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
        </div>
        <div></div>
    </header>
  );
};

export default HelloWorld;
