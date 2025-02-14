import React from "react";
import { useState,useEffect,useContext } from "react";
import LovedPorducts from "./LovedProducts";
import { useNavigate } from "react-router-dom";
import SurprisedProducts from "./SurprisesProducts";
import { ProductContext } from "../utils/ProductsContext";
const ShopByPreferences=()=>{
    const { selectedProduct, fetchProductById, productDetailId } =
      useContext(ProductContext);
        const navigate=useNavigate();
    const [ToggleOptions,setToggleOptions]=useState("")
    const [products, setProducts] = useState([]);
    const [productsids, setProductsids] = useState([]);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedAgeRange, setSelectedAgeRange] = useState(null);
    const [selectedRelationship, setSelectedRelationship] = useState(null);
    
    const ageOptions = [
        { label: 'Teen', icon: '👶' }, 
        { label: 'Adult', icon: '🧑' },
        { label: 'Senior', icon: '👴' },
      ];        
      const [productDetails, setProductDetails] = useState({});

useEffect(() => {
  const fetchDetails = async () => {
    const details = {};
    for (const productId of productsids) {
      details[productId] = await fetchProductById(productId);
    }
    setProductDetails(details);
  };

  if (productsids.length > 0) {
    fetchDetails();
  }
}, [productsids]);

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
                    // console.log(data); 
              
                  } catch (error) {
                    console.error('Error:', error);
                  }
                };
        
        fetchProducts();
    }, [selectedGender, selectedAgeRange, selectedRelationship]);
    useEffect(() => {
      if (!selectedGender || !selectedAgeRange || !selectedRelationship) return;
    
      // Group products by product_id
      const productMap = new Map();
    
      products.forEach((item) => {
        if (!productMap.has(item.product_id)) {
          productMap.set(item.product_id, []);
        }
        productMap.get(item.product_id).push(item.attribute);
      });
    
      // Filter products that match all three attributes
      let filteredProducts = [...productMap.entries()]
        .filter(([_, attributes]) => 
          attributes.includes("gender") &&
          attributes.includes("agerange") &&
          attributes.includes("relationship")
        )
        .map(([productId]) => productId);
    
      // If less than 3 products, add those with at least 2 attributes
      if (filteredProducts.length < 3) {
        const additionalProducts = [...productMap.entries()]
          .filter(([_, attributes]) => 
            attributes.filter(attr => ["gender", "agerange", "relationship"].includes(attr)).length === 2
          )
          .map(([productId]) => productId);
    
        filteredProducts = [...new Set([...filteredProducts, ...additionalProducts])].slice(0, 3);
      }
    
      setProductsids(filteredProducts);
    }, [products, selectedGender, selectedAgeRange, selectedRelationship]);

    return(
        <>
 <div className="font-bold text-3xl md:text-5xl text-[#8B024B] leading-tight text-center pt-[12vh]">
  Shop by Your Preferences
</div>

{ToggleOptions === "" && (
  <div className="font-semibold text-xl md:text-3xl text-[#8B024B] leading-tight text-center py-[2vh]">
    <i
    onClick={() => navigate("/")}
    className="fa-solid text-[#8B024B] text-2xl md:text-3xl absolute top-4 sm:top-[5vh] left-[5vw] fa-arrow-left cursor-pointer"
  ></i>
   
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
    <div className="flex flex-col items-center justify-center w-full pt-[10vh]">
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
    <div className="flex flex-col md:flex-row w-11/12 md:w-4/5 items-center justify-center mx-auto gap-4 pb-6 pt-[5vh] rounded-md bg-[#D1A7BD]">
      <i
        onClick={() => setToggleOptions("Relation")}
        className="fa-solid text-[#8B024B] text-2xl md:text-3xl absolute top-[5vh] left-[5vw] fa-arrow-left cursor-pointer"
      ></i>
{productsids.slice(0, 3).map((productid) => (
  productDetails[productid] ? (
    <LovedPorducts key={productid}  product={productDetails[productid]} />
  ) : (
    <div key={productid}>Loading...</div> // Show loading while fetching
  )
))}


    </div>
  )}
</div>

        </>
    );
}
export default ShopByPreferences;