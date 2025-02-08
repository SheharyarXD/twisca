import React,{useContext} from "react";
import { ProductContext } from "../utils/ProductsContext";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
const LovedPorducts=({product })=>{
    console.log(product)
    const {userid}=useContext(AuthContext)
    const {productDetailId,setproductDetailId,fetchProductById}=useContext(ProductContext)
    const { addToCart}=useContext(CartContext);
    if (!product) {
        return <div>Loading...</div>; 
      }
    return(
        <div className="max-h-fit bg-[#FFE8FF] w-[250px] rounded-[1vw] p-3">
            <div className="h-fit overflow-hidden object-cover relative rounded-[1vw]">
            <div className="text-white bg-red-700 w-fit px-4 py-1 absolute top-0 -left-1 text-xs rounded-[0.3vw]">SALE!</div>
            <img src={product.imageurl||"./Images/sampleImage.png"} className="object-cover max-h-[200px] w-full" alt="" />
            </div>
            <div className="flex flex-row text-[0.85rem] font-bold px-2 pt-[2vh]">
                <div className="w-[60vw]  text-start">{product.productname}</div>
                <div className="w-[40vw]  text-end">PKR {product.price}</div>
            </div>
            <div className="flex flex-row text-[0.7rem] px-2 pt-[0.8vh]">
                <div className="w-[60vw] text-start text-gray-600 font-semibold">{product.description}</div>
                <div className="w-[40vw] text-end line-through font-bold text-red-700">PKR {product.oldprice}</div>
            </div>
            <div className="flex flex-row px-2 text-xs items-center pt-[1vh] text-gray-500">
            <img src="./Images/ri-star-fill.png" className="pr-1" alt="" /> <p><span className="pr-3">{(Math.random() * (5 - 3.5) + 3.5).toFixed(1)}</span>|<span className="pl-3">{Math.floor(Math.random() * (10 - 3 + 1)) + 3}</span> sold</p>
            </div>
            <div className="flex flex-row items-center justify-center pt-[1vh]">
            <button onClick={(event)=>
                {event.stopPropagation(); addToCart(userid,product.productid,1)}} className="bg-[#8B024B] text-white w-[70%] text-[0.8rem] py-2 rounded-[0.5vw] ">Add to Cart</button>
            <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full "><img src="./Images/Union.png" alt="" /></button>
            </div>
        </div>
    );
}
export default LovedPorducts;