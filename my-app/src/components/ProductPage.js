import React, { useContext,useEffect, useState } from "react";
import Header from "./header";
import ProductPageProducts from "./ProductPageProducts";
import { ProductContext } from "../utils/ProductsContext";
const ProductPage = () => {
  const {  products,selectedProduct,fetchProductById,fetchProducts }=useContext(ProductContext);
  const [productsAvail,setProductsAvail]=useState(false)
    useEffect(() => {
      setProductsAvail(true)
      console.log(products)
      }, [fetchProducts(),products]);
  return (
    <>
      <Header></Header>
      <div className="flex flex-row justify-between w-full px-[5vw]">
        <div id="SideBar" className="w-[23vw]   flex flex-col px-3">
          <div className="text-center border border-[#414141] w-full rounded-[0.5vw] overflow-hidden">
            <div className="bg-[#8B024B] text-white py-[2vh] px-4">
              TOP CATEGORY
            </div>
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
          <div className="text-center border border-[#414141] w-full mt-[3vh] rounded-[0.5vw] overflow-hidden">
            <div className="bg-[#8B024B] text-white py-[2vh] px-4">
              PRICE RANGE
            </div>
            <div>
              <ul className="text-left pl-[3vw] py-[2vh]">
                <li className="py-[1vh]">
                  <input type="checkbox" />{" "}
                  <span className="pl-[1vw]"> $20.00 - $ 50.00</span>
                </li>
                <li className="py-[1vh]">
                  <input type="checkbox" />{" "}
                  <span className="pl-[1vw]"> $20.00 - $ 50.00</span>
                </li>
                <li className="py-[1vh]">
                  <input type="checkbox" />{" "}
                  <span className="pl-[1vw]"> $20.00 - $ 50.00</span>
                </li>
                <li className="py-[1vh]">
                  <input type="checkbox" />{" "}
                  <span className="pl-[1vw]"> $20.00 - $ 50.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>

        <div id="products" className=" h-[10vh] w-[63.5vw]">
          <div className="font-bold text-[2rem] mb-[4vh]">
            Our Collection of Products
          </div>
          <div className="relative">
            <i className="fas fa-search absolute right-[0.3vw] z-50 cursor-pointer bg-[#8B024B] p-2.5 rounded-full text-white top-[0.3vh]"></i>
            <input
              type="text"
              placeholder="Search An Item"
              className="w-full rounded-3xl px-3 py-2 border-[#5F5F5F] border"
            />
          </div>

          <div className="flex flex-row pt-[1.5vh] justify-between">
            {/* Filtewrs  */}
            <div className="flex flex-row justify-between">
              <span className="flex items-center border border-[#8B024B] py-0.5 mr-3 px-2.5 rounded-[3px] text-[#8B024B] justify-between">
                <p className="text-sm">Filter1</p>
                <i className="pl-2.5 fa-solid fa-close"></i>
              </span>
              <span className="flex items-center border border-[#8B024B] py-0.5 px-2.5 mr-3 rounded-[3px] text-[#8B024B] justify-between">
                <p className="text-sm">Filter2</p>
                <i className="pl-2.5 fa-solid fa-close"></i>
              </span>
              <span className="flex items-center border border-[#8B024B] py-0.5 px-2.5 mr-3 rounded-[3px] text-[#8B024B] justify-between">
                <p className="text-sm">Filter3</p>
                <i className="pl-2.5 fa-solid fa-close"></i>
              </span>
            </div>
            {/* Sort By */}
            <div className="flex items-center ">
              <select
                id="sort"
                className=" rounded-lg  text-sm text-[#8B024B] font-semibold"
              >
                <option value="" selected>
                  Sort By
                </option>
                <option value="price_asc">Low to High</option>
                <option value="price_desc">High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          <p className="text-sm font-semibold pt-[2vh]">Showing 1-09 of 24 item(s)</p>
          <div className="flex flex-wrap flex-row justify-between mt-[1vh] max-h-[48vh] overflow-y-scroll">
          {productsAvail&& Array.isArray(products) && products.length > 0 ? (products.map((product) => (
    <ProductPageProducts
    productName = {product.productName}
    currentPrice = {product.price}
    originalPrice = {product.oldprice}
    description = {product.description}
      />
))): (
  <p>Loading products...</p>
)}
          </div>
          <div className="flex flex-col justify-center items-center text-center w-[22vw] mx-auto py-[2vh]">
          <p className="text-xs text-[#414141] font-semibold py-[2vh]">Showing 1-09 of 24 item(s)</p>
          <p className="flex border border-gray-600 h-0.5 w-full mb-[2vh] bg-gray-600"></p>
          <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] w-fit flex">Load More<i className="fa-solid fa-arrow-right px-2 pt-1"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
