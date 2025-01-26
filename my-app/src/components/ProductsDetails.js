import React from "react";
import { useState } from "react";
import Header from "./header";
import FooterPage from "./footer";
import SurprisedProducts from "./SurprisesProducts";
import CommentsTemplate from "./comment";


const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [descriptionToggle,setDescription] = useState(true);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <Header className="overflow-hidden"></Header>
      <div className="flex flex-row items-center overflow-hidden justify-between px-[5vw]">
        {/* text section */}
        <div className="w-[50vw] pr-[5vw]">
          <p>Product Listing - Top Category - Gifts & Hampers</p>
          <div className="text-white bg-red-600 w-fit px-4 py-1 mt-[2vh]  text-xs rounded-[0.3vw]">
            SALE!
          </div>
          <div className="flex flex-row text-xs items-center pt-[1vh] text-gray-500">
            <img src="../Images/ri-star-fill.png" className="pr-1" alt="" />{" "}
            <p>
              <span className="pr-3">5.0</span>|<span className="pl-3">56</span>{" "}
              sold
            </p>
          </div>
          <div className="font-bold text-[2.4rem] pt-[1vh] leading-tight">
            Love in a Box: Deluxe Chocolate Surprise Hamper
          </div>
          <div className="font-bold text-[#8B024B] py-[1vh] text-[2.5rem]">
            $205.62
          </div>
          <div>
            <div className="font-semibold py-1">Description</div>
            <p className="text-sm text-[#414141] font-semibold w-[70%]">
              Indulge in a delightful mix of premium treats crafted to make
              every moment special.
            </p>
          </div>
          <div>
            <div className="font-semibold py-2">Ingrendients:</div>
            <ul className="list-disc pl-9">
              <li>Nutritious Cookies</li>
              <li>Rich Chocolate Treats</li>
              <li>Vibrant petals to brighten any occasion</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold py-2">Color</div>
            <div className="flex flex-row justify-start items-center space-x-3">
              <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
              <div className="rounded-full h-8 w-8 bg-pink-600 border-2 border-gray-300 hover:border-pink-800"></div>
              <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
              <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
              <div className="rounded-full h-8 w-8 bg-red-600 border-2 border-gray-300 hover:border-red-800"></div>
            </div>
          </div>
          <div>
            <div className="font-semibold py-2">Size</div>
            <ul className="flex flex-row">
              <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-1.5 mr-1 border-2 border-[#C1C1C1] rounded-md">
                XS
              </li>
              <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
                S
              </li>
              <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
                M
              </li>
              <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-3.5 mx-1 border-2 border-[#C1C1C1] rounded-md">
                L
              </li>
              <li className="text-2xl hover:border-[#8B024B] cursor-pointer text-[#414141] py-1 px-2 mx-1   border-2 border-[#C1C1C1] rounded-md">
                XL
              </li>
            </ul>
          </div>
        </div>
        {/* image section */}
        <div className="w-full h-[70vh] w-[50vw] pr-[3vw] mt-[1vh] overflow-hidden">
          <div className="w-full h-[54vh] overflow-hidden">
            <img
              className="cover w-full h-auto"
              src="../Images/sampleImage.png"
              alt=""
            />
          </div>
          {/* sub Images */}
          <div className="w-full h-[15vh] flex flex-row items-center justify-between pt-[3vh] space-x-3">
            <div className="w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
              <img
                className="cover h-full w-full"
                src="../Images/sampleImage2.png"
                alt=""
              />
            </div>
            <div className="w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
              <img
                className="cover h-full w-full"
                src="../Images/sampleImage2.png"
                alt=""
              />
            </div>
            <div className="w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
              <img
                className="cover h-full w-full"
                src="../Images/sampleImage2.png"
                alt=""
              />
            </div>
            <div className="w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
              <img
                className="cover h-full w-full"
                src="../Images/sampleImage2.png"
                alt=""
              />
            </div>
            <div className="w-[6vw] overflow-hidden h-[14vh] p-1 border-2 border-gray-400 hover:border-[#8B024B] rounded-lg">
              <img
                className="cover h-full w-full"
                src="../Images/sampleImage2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* baseline */}
      <div className="flex flex-row justify-between px-[15vw] pt-[1vh]  items-center">
        <div className="flex flex-row items-center">
          <img
            className="h-12 pr-4 rounded-lg"
            src="../Images/sampleImage2.png"
            alt=""
          />
          <div className="flex flex-col">
            <div className="font-bold text-sm">
              Love in a Box: Deluxe Chocolate Surprise Hamper{" "}
            </div>
            <div className="font-bold text-xs text-[#8B024B]">
              Gifts & Hampers
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center pt-[1vh]">
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
          <button className="bg-[#8B024B] text-white px-[5.5vw] text-[0.8rem] py-2 rounded-[0.5vw] ">
            Add to Cart
          </button>
          <button className="border-[#8B024B] border text-white ml-[0.5vw] px-[0.8vw] py-[0.9vw] rounded-full ">
            <img src="../Images/Union.png" alt="" />
          </button>
        </div>
      </div>

      <div className="min-h-screen ">
        <div className="flex flex-row items-center justify-center">
          <button onClick={()=>setDescription(true)} className="text-[#949494] text-lg px-6 mt-[10vh] py-4 border-b-4 border-[#8B024B]">
            Description
          </button>
          <button onClick={()=>setDescription(false)} className="text-[#949494] text-lg px-6 mt-[10vh] py-4 border-b-4 border-[#8B024B]">
            Review
          </button>
        </div>

        {/* description */}
        {descriptionToggle ? (       
         <div className="Description pt-[10vh] pb-[14vh] overflow-hidden px-[18vw]">
          <div className="flex flex-row  justify-between">
            <div className="w-[45vw]">
              <div className="font-semibold text-lg py-1 pb-3">Description</div>
              <p className="font-semibold  text-gray-600">
                Make your gifts extra special with our luxurious gift box,
                designed to add elegance and charm to any present. Whether
                you're celebrating a birthday, anniversary, wedding, or festive
                occasion, this premium gift box enhances the beauty of your
                thoughtful gesture. Crafted with high-quality materials, the box
                is sturdy, durable, and stylish. Its sleek design and smooth
                finish make it perfect for packaging items like chocolates,
                jewelry, perfumes, accessories, or heartfelt letters. The secure
                magnetic closure ensures that your gift remains safe and
                beautifully presented. <br />
                Elegant & Stylish – Adds a luxurious touch to any
                gift.High-Quality Material – Durable, sturdy, and premium
                finish.Versatile Usage – Ideal for chocolates, jewelry,
                perfumes, and more.Secure Closure – Magnetic or ribbon closure
                for a perfect presentation.Multiple Sizes & Colors – Choose the
                perfect match for your occasion.Eco-Friendly – Made from
                sustainable and reusable materials.Personalization Options – Add
                ribbons, tags, or handwritten notes.Perfect for All Events –
                Birthdays, anniversaries, weddings, and celebrations. <br />
                Our gift box is available in various sizes and colors, allowing
                you to choose the perfect match for your occasion. The
                eco-friendly materials make it a sustainable choice, ensuring
                that your gift is both elegant and environmentally responsible.
                Personalize it with ribbons, name tags, or handwritten notes to
                create a truly unique experience. Whether it's for a loved one,
                a colleague, or a friend, this gift box adds a touch of
                sophistication to your heartfelt presents. <br />
                Make your gifting experience memorable and stylish with our
                premium gift box – because every special gift deserves the
                perfect packaging!
              </p>
            </div>
            <div className="w-[15vw]">
              <div className="font-semibold py-1 text-lg">Feature</div>
              <div className="font-semibold text-gray-700">
                Luxury Packaging Curated Selection Express Delivery Secure
                Payments Personalized Note
              </div>
            </div>
          </div>
        </div> 
      ):(
          <div className="flex flex-col">
            <div className="flex flex-col px-[7vw] py-[5vh] space-y-6">
            <CommentsTemplate></CommentsTemplate>
            <CommentsTemplate></CommentsTemplate>
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
                  className="p-4 border-[#7E7E80] border-2 w-full h-[20vh] rounded-lg"
                  placeholder="Write your review"
                  />
              </div>
              <div className="flex flex-row items-center justify-between px-[10vw]">
                <div className="pl-[5vw]"> Your Ratings: <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div>
                <div>
                  <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] ">
                    Post Review<i className="fa-solid fa-arrow-right pl-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> 
   )};
      </div>

      <div className="px-[10vw] flex-col  justify-center items-center">
        <div className="flex font-bold text-[2.5rem]">You May Also Like:</div>
        <div className="flex flex-wrap flex-row justify-between py-8">
          <SurprisedProducts />
          <SurprisedProducts />
          <SurprisedProducts />
        </div>
      </div>
      <FooterPage></FooterPage>
    </>
  );
};
export default ProductDetails;
