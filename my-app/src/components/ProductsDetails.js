import React, { useContext,useEffect } from "react";
import { useState } from "react";
import Header from "./header";
import FooterPage from "./footer";
import SurprisedProducts from "./SurprisesProducts";
import moment from 'moment';
import CommentsTemplate from "./comment";
import { ProductContext } from "../utils/ProductsContext";
import { ReviewsContext } from "../utils/ReviewContext";
import { AuthContext } from "../utils/AuthContext";
import { CartContext } from "../utils/CartContext";

const ProductDetails = () => {
  const { selectedProduct, fetchProductById, productDetailId } =
    useContext(ProductContext);
    const[additionalDetails,setadditionalDetails]=useState([]);
      const { addToCart}=useContext(CartContext);
      const [sampleProducts,setsampleProducts]=useState([]);
    const {userid}=useContext(AuthContext)
    const { reviews,
      loading,
      fetchReviews,
      addReview,
      updateReview,
      deleteReview,}=useContext(ReviewsContext);
  const [quantity, setQuantity] = useState(1);
  const [reviewtext,setcommentText]=useState(null);
  const [commentRating,setCommentRating]=useState(null);
  const [descriptionToggle, setDescription] = useState(true);
      
      const getProductsByCategory = async (categoryId) => {
        try {
          const response = await fetch(`https://twisca-gpel.vercel.app/api/products/category/${categoryId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const products = await response.json();
          return products; // Return the list of products
        } catch (error) {
          console.error('Error fetching products:', error);
          return []; // Return an empty array in case of error
        }
      };
      useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`https://twisca-gpel.vercel.app/api/products/products/${productDetailId}`);
    
            if (!response.ok) {
              throw new Error('Product not found or server error');
            }
    
            // Parse the JSON response
            const data = await response.json();
            setadditionalDetails(data);
            console.log(data)
          } catch (err) {

            console.error(err);
          }
        };
        fetchProduct();
      }, [productDetailId]);
      useEffect(() => {
      
        fetchSupriseProducts(8);
      }, []);
      const fetchSupriseProducts = async (num) => {
        try {
          const product = await getProductsByCategory(num); 
          setsampleProducts(product); 

        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const handleReview=()=>{
    setDescription(false)
    fetchReviews(productDetailId)
    console.log(reviews)
  }
  return (
    <>
      {selectedProduct ? (
        <div>
          <Header className="overflow-hidden"></Header>

          <div className="flex flex-col-reverse mt-[12vh] md:flex-row items-center overflow-hidden justify-between px-[5vw]">
            {/* text section */}
            <div className="md:w-[50vw] pr-[5vw]">
              {/* <p>Product Listing - Top Category - Gifts & Hampers</p> */}
              <div className="text-white bg-red-600 w-fit px-4 py-1   text-xs rounded-[0.3vw]">
                SALE!
              </div>
              <div className="flex flex-row text-xs items-center pt-[1vh] text-gray-500">
                <img src="../Images/ri-star-fill.png" className="pr-1" alt="" />{" "}
                <p>
                  <span className="pr-3">{(Math.random() * (5 - 4) + 4).toFixed(1)}</span>|
                  <span className="pl-3">{Math.floor(Math.random() * (10 - 3 + 1)) + 3}</span> sold
                </p>
              </div>
              <div className="font-bold text-[2.4rem] pt-[1vh] leading-tight">
                {selectedProduct.productname}
              </div>
              <div className="font-bold text-[#8B024B] py-[1vh] text-[2.5rem]">
              PKR {selectedProduct.price}
              </div>
              <div>
                <div className="font-semibold py-1">Description</div>
                <p className="text-sm text-[#414141] font-semibold w-[70%]">
                  {selectedProduct.description}
                </p>
              </div>
              <div>
              {Array.isArray(additionalDetails.features) && 
 additionalDetails.features.filter((feature) => feature.feature_type === "ingredients").length > 0 && (
  <div className="font-semibold py-2">Details:</div>
)}

                <ul className="list-disc pl-9">

  {Array.isArray(additionalDetails.features) && additionalDetails.features.length>0 && additionalDetails.features
    .filter((feature) => feature.feature_type === "ingredients")
    .flatMap((feature) => feature.feature_value.split(","))
    .map((ingredient, index) => (
      <li key={`ingredient-${index}`}>{ingredient.trim()}</li>
    ))}
                </ul>
              </div>
              <div>
              {Array.isArray(additionalDetails.features) && 
 additionalDetails.features.filter((feature) => feature.feature_type === "color").length > 0 && (
   <div className="font-semibold py-2">Color</div>
)}
                <div className="flex flex-row justify-start items-center space-x-3">
                {Array.isArray(additionalDetails.features) && additionalDetails.features.length>0 && additionalDetails.features
    .filter((feature) => feature.feature_type === "color")
    .flatMap((feature) => feature.feature_value.split(","))
    .map((color, index) => (

        <div key={`color-${index}`} style={{ backgroundColor: color }}
        className="rounded-full h-8 w-8  border-2 border-gray-300 hover:border-black"></div>
    ))}
                </div>
              </div>
              <div>
              {Array.isArray(additionalDetails.features) && 
 additionalDetails.features.filter((feature) => feature.feature_type === "sizes").length > 0 && (
   <div className="font-semibold py-2">Size</div>
)}
                <ul className="flex flex-row">
                {Array.isArray(additionalDetails.features) && additionalDetails.features.length>0 && additionalDetails.features
    .filter((feature) => feature.feature_type === "sizes")
    .flatMap((feature) => feature.feature_value.split(","))
    .map((ingredient, index) => (
      <li key={`ingredient-${index}`} className="text-lg hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 w-12 min-w-fit text-center mr-1 border-2 border-[#C1C1C1] rounded-md">
                    {ingredient.trim()}
                  </li>
    ))}
                </ul>
              </div>
            </div>
            {/* image section */}
            <div className="w-full md:h-[70vh] md:w-[50vw] pr-[3vw] mt-[1vh] overflow-hidden">
              <div className="w-full max-h-[300px] md:max-h-[54vh] md:h-[54vh] overflow-hidden">
                <img
                  className="cover w-full h-auto"
                  src={selectedProduct.imageurl||"../Images/sampleImage.png"}
                  alt=""
                />
              </div>
              {/* sub Images */}
              <div className="w-full md:h-[15vh] flex flex-row items-center justify-between pt-[3vh] space-x-3">
              {Array.isArray(additionalDetails.features) &&
  additionalDetails.features.filter((feature) => feature.feature_type === "images").length > 0 &&
  additionalDetails.features
    .filter((feature) => feature.feature_type === "images")
    .map((feature, index) => (
      <div key={index} className="md:w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
        <img
          className="cover h-full w-full"
          src={feature.feature_value || "../Images/sampleImage2.png"}
          alt="feature"
        />
      </div>
    ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between  sm:px-[15vw] pt-[1vh]  items-center">
            <div className="flex hidden sm:flex sm:flex-row items-center">
              <img
                className="h-12 pr-4 rounded-lg"
                src={selectedProduct.imageurl||"../Images/sampleImage2.png"}
                alt=""
              />
              <div className="flex flex-col">
                <div className="font-bold text-sm">
                {selectedProduct.productname}
                </div>
                <div className="font-bold text-xs text-[#8B024B]">
                {selectedProduct.categoryname}
                </div>
              </div>
            </div>
            <div className="flex flex-row px-10 sm:px-0 items-center justify-center pt-[1vh]">
              <div className="flex items-center px-2 relative">
                {/* Minus Button */}
                <button
                  onClick={handleDecrement}
                  className="hover:text-[#8B024B] text-4xl -top-2.5 text-gray-700 absolute left-4"
                >
                  -
                </button>

                {/* Input Box */}
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="w-[80px] text-center border border-gray-300 rounded-2xl text-center pl-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Plus Button */}
                <button
                  onClick={handleIncrement}
                  className="hover:text-[#8B024B] text-xl -top-0.5 text-gray-700 absolute right-4"
                >
                  +
                </button>
              </div>
              <button onClick={(event)=>
                {event.stopPropagation(); addToCart(userid,selectedProduct.productid,quantity)}} className="bg-[#8B024B] text-white px-[5.5vw] text-[0.8rem] py-2 rounded-[0.5vw] ">
                Add to Cart
              </button>
              <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full ">
                <img src="../Images/Union.png" alt="" />
              </button>
            </div>
          </div>

          <div className="min-h-screen ">
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => setDescription(true)} 
                style={{
                  borderBottom: descriptionToggle ? "4px solid #8B024B" : "none", 
                  paddingBottom: "5px" 
                }}
                className="text-[#949494] text-lg px-6 mt-[10vh] py-4 border-b-4 "
              >
                Description
              </button>
              <button
                onClick={handleReview}
                style={{
                  borderBottom: descriptionToggle ? "none": "4px solid #8B024B" , 
                  paddingBottom: "5px" 
                }}
                className="text-[#949494] text-lg px-6 mt-[10vh] py-4 border-b-4 border-[#8B024B]"
              >
                Review
              </button>
            </div>
            {/* description */}
            {descriptionToggle ? (
              <div className="Description pt-[10vh] pb-[14vh] overflow-hidden px-[18vw]">
                <div className="flex flex-col-reverse md:flex-row  justify-between">
                  <div className="md:w-[45vw]">
                    <div className="font-semibold text-lg py-1 pb-3">
                      Description
                    </div>
                    {Array.isArray(additionalDetails.features) && additionalDetails.features.length>0 && additionalDetails.features
    .filter((feature) => feature.feature_type === "description")
    .map((feature) => (
                    <p  key={`${feature.feature_type}-${feature.feature_value}`} className="font-semibold  text-gray-600">                    
                      {feature.feature_value}               
                    </p>
    ))}
                  </div>
                  <div className="md:w-[15vw]">
                    <div className="font-semibold py-1 text-lg">Feature</div>
                    <div className="font-semibold text-gray-700">
                    <ul>
                    <ul>
  {Array.isArray(additionalDetails.features) && additionalDetails.features.length>0 && additionalDetails.features
    .filter((feature) => feature.feature_type === "features")
    .map((feature) => (
      <li key={`${feature.feature_type}-${feature.feature_value}`}>
 {feature.feature_value}
      </li>
    ))}
</ul>

</ul>

                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex flex-col px-[7vw] py-[5vh] space-y-6">
                  {Array.isArray(reviews)&&reviews.length>0 &&reviews.map((review)=>{
                    const formattedDate = moment(review.createdat).format('MMMM Do YYYY, h:mm:ss a');
                    return(
                      <CommentsTemplate
                      key={review.reviewid}
                      name="Alice John"
                      date={formattedDate}
                      rating={review.rating}
                      comment={review.reviewtext}
                      likes={review.likes||0}
                      reviewid={review.reviewid}
                      dislikes={review.dislikes||0}
                      profileImage="../Images/sampleImage2.png"
                      />
                    )
                  })}

                </div>
                {/* POst comment */}
                <div className="flex flex-col  justify-center">
                  <div className="flex flex-row mb-[3vh] mt-[2vh] mx-[10vw]">
                    <img
                      className="h-11 mr-[1vw] w-auto rounded-full"
                      src="../Images/sampleImage2.png"
                      alt=""
                    />
                    <textarea
                         onChange={(e) => setcommentText(e.target.value)}
                      className="p-4 border-[#7E7E80] border-2 w-full h-[20vh] rounded-lg"
                      placeholder="Write your review"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between px-[10vw]">
                    <div className="pl-[5vw]">
                      {" "}
                      Your Ratings:{" "}
                      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fa fa-star cursor-pointer text-gray-400 text-xl transition-all duration-200 ${
            star <= commentRating ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => setCommentRating(star)}
          aria-hidden="true"
        ></i>
      ))}
                    </div>
                    <div>
                      <button onClick={()=>addReview(userid,productDetailId,commentRating,reviewtext)} className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] ">
                        Post Review
                        <i className="fa-solid fa-arrow-right pl-3"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            ;
          </div>

          <div className="px-[10vw] flex-col  justify-center items-center">
            <div className="flex font-bold text-[1.8rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem]">
              You May Also Like:
            </div>
            <div className="flex flex-wrap flex-row justify-center sm:justify-between py-8">
            {sampleProducts.length > 0 ? (
  sampleProducts.slice(0, 3).map((product) => (
    <SurprisedProducts key={product.productId} Surpriseproduct={product} />
  ))
) : (
  <div>No products available</div>
)}
            </div>
          </div>
          <FooterPage></FooterPage>
        </div>
      ) : (
        <p>Error Loading Product</p>
      )}
    </>
  );
};
export default ProductDetails;
