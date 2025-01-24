import React from "react";
import Header from "./header";
const ProductPage=()=>{

    return(
        <>
        <Header></Header>
        <div className="flex flex-row justify-between w-full px-[5vw]">
            <div id="SideBar" className="w-[25vw]   flex p-3">
                <div className="text-center border border-black w-full">
                    <div className="bg-[#8B024B] text-white py-2 px-4">Top Category</div>
                    <div>
                        <ul>
                            <li>Personalized Gifts</li>
                            <li>Custom Gifts</li>
                            <li>Luxury Gifts</li>
                            <li>Gifts for Him</li>
                            <li>Gifts for Her</li>
                            <li>Accessories</li>
                            <li>Gifts & Hampers</li>
                        </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
         <div id="products" className="bg-black h-[10vh] w-[63.5vw]"></div> 
        </div>
        </>

        
    );
}
export default ProductPage;