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
                    const response = await fetch('https://twisca-gpel.vercel.app/api/products/get-products', {
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
 <div className="font-bold text-3xl md:text-5xl text-[#8B024B] leading-tight text-center pt-[7vh]">
  Shop by Your Preferences
</div>

{ToggleOptions === "" && (
  <div className="font-semibold text-xl md:text-3xl text-[#8B024B] leading-tight text-center py-[2vh]">
    A Quick Quiz
  </div>
)}

{ToggleOptions === "Result" && (
  <div className="font-semibold text-lg md:text-2xl text-[#8B024B] leading-tight text-center py-[2vh]">
    Based on your preferences, we think you'll love these!
  </div>
)}

<div>
  {ToggleOptions === "" && (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
      <div
        onClick={() => {
          setToggleOptions("Age");
          setSelectedGender("male");
        }}
        className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-11/12 md:w-1/3 h-[50vh] md:h-[65vh] rounded-lg flex flex-col items-center justify-center"
      >
        <img
          className="h-[40vh] md:h-[55vh] w-auto"
          src="../Images/male.png"
          alt="Male"
        />
        <div className="text-xl md:text-2xl font-semibold text-white pt-[1vh]">
          Male
        </div>
      </div>
      <div
        onClick={() => {
          setToggleOptions("Age");
          setSelectedGender("female");
        }}
        className="bg-[#D1A7BD] hover:bg-[#8B024B] hover:cursor-pointer w-11/12 md:w-1/3 h-[50vh] md:h-[65vh] rounded-lg flex flex-col items-center justify-center"
      >
        <img
          className="h-[40vh] md:h-[55vh] w-auto"
          src="../Images/female.png"
          alt="Female"
        />
        <div className="text-xl md:text-2xl font-semibold text-white pt-[1vh]">
          Female
        </div>
      </div>
    </div>
  )}

  {ToggleOptions === "Age" && (
    <div className="flex flex-col items-center justify-center">
      <i
        onClick={() => setToggleOptions("")}
        className="fa-solid text-[#8B024B] text-2xl md:text-3xl absolute top-4 sm:top-[5vh] left-[5vw] fa-arrow-left cursor-pointer"
      ></i>
      <div className="font-semibold text-[#8B024B] pt-[5vh] text-xl md:text-2xl">
        What's Your Age?
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-[3vh]">
        {ageOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => {
              setToggleOptions("Relation");
              setSelectedAgeRange(option.label);
            }}
            className="px-8 md:px-16 py-2 md:py-3 text-white text-lg md:text-xl rounded-lg hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD]"
          >
            {option.label} {option.icon}
          </button>
        ))}
      </div>
    </div>
  )}

  {ToggleOptions === "Relation" && (
    <div className="flex flex-col items-center justify-center">
      <i
        onClick={() => setToggleOptions("Age")}
        className="fa-solid text-[#8B024B] text-2xl md:text-3xl absolute top-4 sm:top-[5vh] left-[5vw] fa-arrow-left cursor-pointer"
      ></i>
      <div className="font-semibold text-[#8B024B] pt-[5vh] text-xl md:text-2xl">
        What's Your Relationship?
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full md:w-2/3">
        {[
          { label: "🎉 Family", value: "family" },
          { label: "💙 Friendship", value: "friendship" },
          { label: "💼 Professional", value: "professional" },
          { label: "🎂 Birthday Gift", value: "birthday gift" },
        ].map((relation, index) => (
          <button
            key={index}
            onClick={() => {
              setToggleOptions("Result");
              setSelectedRelationship(relation.value);
            }}
            className="px-8 md:px-12 py-2 md:py-3 text-white text-lg md:text-xl rounded-lg hover:bg-[#8B024B] cursor-pointer bg-[#D1A7BD]"
          >
            {relation.label}
          </button>
        ))}
      </div>
    </div>
  )}

  {ToggleOptions === "Result" && (
    <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 justify-center mx-auto gap-4 pb-6 pt-[5vh] rounded-md bg-[#D1A7BD]">
      <i
        onClick={() => setToggleOptions("Relation")}
        className="fa-solid text-[#8B024B] text-2xl md:text-3xl absolute top-[5vh] left-[5vw] fa-arrow-left cursor-pointer"
      ></i>
      <SurprisedProducts />
      <SurprisedProducts />
      <SurprisedProducts />
    </div>
  )}
</div>

        </>
    );
}
export default ShopByPreferences;