import React from "react";
import { useState,useEffect } from "react";
import SurprisedProducts from "./SurprisesProducts";
const ShopByPreferences=()=>{
    const [ToggleOptions,setToggleOptions]=useState("")
    const [products, setProducts] = useState([]);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedAgeRange, setSelectedAgeRange] = useState(null);
    const [selectedRelationship, setSelectedRelationship] = useState(null);
    
    const ageOptions = [
        { label: 'Teen', icon: '👶' }, 
        { label: 'Adult', icon: '🧑' },
        { label: 'Senior', icon: '👴' },
      ];        
      useEffect(() => {
        
              const fetchProducts = async () => {
                  try {
                    const response = await fetch('http://localhost:3000/api/products/get-products', {
                      method: 'POST',  
                      headers: {
                        'Content-Type': 'application/json',  
                      },
                      body: JSON.stringify([
        
                          { attribute: 'gender', attributeValue: selectedGender },  
                          { attribute: 'agerange', attributeValue: selectedAgeRange },
                          { attribute: 'relationship', attributeValue: selectedRelationship }, 
                      ]
             
                      ),
                    });
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
              
                    const data = await response.json();
                    setProducts(data);
                    console.log(data); 
              
                  } catch (error) {
                    console.error('Error:', error);
                  }
                };
        
        fetchProducts();
    }, [selectedGender, selectedAgeRange, selectedRelationship]);
    return(
        <>
             <div className="font-bold text-[3rem] text-[#8B024B] leading-tight text-center pt-[7vh]">Shop by Your Preferences</div>
             {ToggleOptions==""&& (
             <div className="font-semibold text-[2rem] text-[#8B024B] leading-tight text-center  py-[2vh]">A Quick Quiz</div>
             )}
              {ToggleOptions=="Result" && (
             <div className="font-semibold text-[1.3rem] text-[#8B024B] leading-tight text-center  py-[2vh]">Based on your preferences, we think you'll love these!</div>
             )}
             <div>
                {ToggleOptions==""&& (
                    <div  className="flex flex-row items-center justify-center space-x-4">
                  <div onClick={()=>{setToggleOptions("Age");setSelectedGender("male");}} className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/male.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Male</div>
                </div>
                <div onClick={()=>{setToggleOptions("Age");setSelectedGender("female");}}   className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-[30vw] h-[65vh] rounded-lg flex items-center flex-col justify-center">
                    <img className="flex items-center justify-center h-[55vh] w-auto" src="../Images/female.png" alt="" />
                    <div className="text-[2rem] font-semibold text-white pt-[1vh]">Female</div>
                </div>
                    </div>
            )}
            {ToggleOptions=="Age" &&(
                <div  className="flex flex-col items-center justify-center space-x-4">
                        <i onClick={()=>setToggleOptions("")} className="fa-solid absolute text-[#8B024B] text-[2.5rem] top-[10vh] left-[5vw] fa-arrow-left  pl-[1vw]"></i>
                        <div className="font-semibold text-[#8B024B] pt-[5vh] text-[2rem]">What's Your Age?</div>
                        <div className="space-x-4">

                            {ageOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {setToggleOptions("Relation");setSelectedAgeRange(option.label)}}
                className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2"
              >
                {option.label} {option.icon}
              </button>
            ))}
                        </div>
                    </div>
            )}
                {ToggleOptions=="Relation" &&(
                 <div  className="flex flex-col items-center justify-center space-x-4">
                     <i onClick={()=>setToggleOptions("Age")} className="fa-solid absolute text-[#8B024B] text-[2.5rem] top-[10vh] left-[5vw] fa-arrow-left  pl-[1vw]"></i>
                 <div className="font-semibold text-[#8B024B] pt-[5vh] text-[2rem]">What's Your Relationship?</div>
                 <div className="flex jutify-center flex-wrap w-[50vw]">
                     <button onClick={()=>{setToggleOptions("Result");setSelectedRelationship("family");}}  className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">🎉 Family</button>
                     <button  onClick={()=>{setToggleOptions("Result");setSelectedRelationship("friendship")}}  className="px-20 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">💙 Friendship</button>
                     <button  onClick={()=>{setToggleOptions("Result");setSelectedRelationship("professional")}}  className="px-12 rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">💼 Professional</button>
                     <button  onClick={()=>{setToggleOptions("Result");setSelectedRelationship("birthday gift")}}  className="px-[67px] rounded-lg py-3 text-white text-[1.6rem] mt-[5vh] hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD] mx-2">🎂 Birthday Gift</button>   
                 </div>
             </div>
                )}
                {ToggleOptions=="Result" &&(
                    <div className="flex flex-row w-[80vw] justify-center mx-auto space-x-5 pb-6 pt-[10vh] rounded-md mt-[2vh] bg-[#D1A7BD]">
                        <i onClick={()=>setToggleOptions("Relation")} className="fa-solid absolute text-[#8B024B] text-[2.5rem] top-[10vh] left-[5vw] fa-arrow-left  pl-[1vw]"></i>
                        <SurprisedProducts/>
                        <SurprisedProducts/>
                        <SurprisedProducts/>
                    </div>
                )}
             </div>
        </>
    );
}
export default ShopByPreferences;