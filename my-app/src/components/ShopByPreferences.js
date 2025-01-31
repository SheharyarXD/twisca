import React from "react";
import { useState } from "react";
const ShopByPreferences=()=>{
    const [ToggleOptions,setToggleOptions]=useState("")
    return(
        <>
             <div className="font-bold text-[3rem] text-[#8B024B] leading-tight text-center pt-[7vh]">Shop by Your Preferences</div>
             {ToggleOptions==""&& (
             <div className="font-semibold text-[2rem] text-[#8B024B] leading-tight text-center  py-[2vh]">A Quick Quiz</div>
             )}
             <div>
                {ToggleOptions==""&& (
                    <div  className="flex flex-row items-center justify-center space-x-4">
                  <div onClick={()=>setToggleOptions("Age")} className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/male.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Male</div>
                </div>
                <div onClick={()=>setToggleOptions("Age")}  className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/female.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Female</div>
                </div>
                    </div>
            )}
            {ToggleOptions=="Age" &&(
                    <div  className="flex flex-col items-center justify-center space-x-4">
                        <div className="font-semibold text-[#8B024B] pt-[5vh] text-[2rem]">What's Your Age?</div>
                        <div className="space-x-4">
                            <button onClick={()=>setToggleOptions("Relation")}  className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD]">Male 👔</button>
                            <button onClick={()=>setToggleOptions("Relation")} className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD]">Female 👗</button>
                        </div>
                    </div>
            )}
                {ToggleOptions=="Relation" &&(
                 <div  className="flex flex-col items-center justify-center space-x-4">
                 <div className="font-semibold text-[#8B024B] pt-[5vh] text-[2rem]">What's Your Relationship?</div>
                 <div className="flex jutify-center flex-wrap w-[50vw]">
                     <button onClick={()=>setToggleOptions("Relation")}  className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">🎉 Family</button>
                     <button onClick={()=>setToggleOptions("Relation")} className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">💙 Friendship</button>
                     <button onClick={()=>setToggleOptions("Relation")} className="px-12 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">💼 Professional</button>
                     <button onClick={()=>setToggleOptions("Relation")} className="px-[67px] rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">🎂 Birthday Gift</button>
                     
                    
                 </div>
             </div>
                )}
             </div>
        </>
    );
}
export default ShopByPreferences;