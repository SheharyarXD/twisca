import React from "react";
import Header from "./header";
const ProductPage=()=>{

    return(
        <>
        <Header></Header>
        <div className="flex flex-row justify-between w-full px-[5vw]">
            <div id="SideBar" className="w-[20vw]   flex flex-col px-3">
                <div className="text-center border border-[#414141] w-full rounded-[0.3vw] overflow-hidden">
                    <div className="bg-[#8B024B] text-white py-[2vh] px-4">TOP CATEGORY</div>
                    <div>
                        <ul className="text-left pl-[4vw] py-[2vh]">
                            <li className="py-[1vh]">Personalized Gifts</li>
                            <li className="py-[1vh]">Custom Gifts</li>
                            <li className="py-[1vh]">Luxury Gifts</li>
                            <li className="py-[1vh]">Gifts for Him</li>
                            <li className="py-[1vh]">Gifts for Her</li>
                            <li className="py-[1vh]">Accessories</li>
                            <li className="py-[1vh]">Gifts & Hampers</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border border-[#414141] w-full mt-[3vh] rounded-[0.3vw] overflow-hidden">
                    <div className="bg-[#8B024B] text-white py-[2vh] px-4">PRICE RANGE</div>
                    <div>
                        <ul className="text-left pl-[3vw] py-[2vh]">
                            <li className="py-[1vh]"><input type="checkbox" /> <span  className="pl-[1vw]"> $20.00 - $ 50.00</span></li>
                            <li className="py-[1vh]"><input type="checkbox" /> <span  className="pl-[1vw]"> $20.00 - $ 50.00</span></li>
                            <li className="py-[1vh]"><input type="checkbox" /> <span  className="pl-[1vw]"> $20.00 - $ 50.00</span></li>
                            <li className="py-[1vh]"><input type="checkbox" /> <span  className="pl-[1vw]"> $20.00 - $ 50.00</span></li>
                        
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
         <div id="products" className=" h-[10vh] w-[63.5vw]">
            <div className="font-bold text-[2rem] mb-[4vh]">Our Collection of Products</div>
                <input type="text" placeholder="Search An Item" className="w-full rounded-3xl px-3 py-2 border-[#5F5F5F] border"/>
            </div> 
        </div>
        </>

        
    );
}
export default ProductPage;