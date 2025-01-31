import React from "react";
const ShopByPreferences=()=>{
    return(
        <>
             <div className="font-bold text-[3rem] text-[#8B024B] leading-tight text-center pt-[7vh]">Shop by Your Preferences</div>
             <div className="font-semibold text-[2rem] text-[#8B024B] leading-tight text-center  py-[2vh]">A Quick Quiz</div>
             <div className="flex flex-row items-center justify-center space-x-4">
                <div className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/male.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Male</div>
                </div>
                <div className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/female.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Female</div>
                </div>
             </div>
        </>
    );
}
export default ShopByPreferences;