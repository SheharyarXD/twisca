import React, { useContext ,useState} from "react";
import { CartContext } from "../utils/CartContext";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate=useNavigate()
       const {cart,
            updateCartItem,fetchCart,
            removeFromCart}=useContext(CartContext)
    const {user,userid,logout}=useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-[5vw] py-[3vh] h-[12vh] flex justify-between bg-white w-full text-[0.9rem] sticky top-0 z-50">
        <div className="flex flex-row items-center w-[20vw] cursor-default"  onClick={() => navigate("/")}> 
            <img className="h-[6vh] w-auto pr-2" src="../logo.png" alt="png" />
        <div className="font-bold text-[1.5rem] text-[#8B024B]">
            twisca
        </div>
        </div>
        <div className="flex items-center w-[40vw]">
        <nav>
            <ul className="flex flex-row justify-between text-[#222222] ">
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a onClick={() => navigate("/")}>Home</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a onClick={() => navigate("/products")}>Products</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a onClick={() => navigate("/orders")}>Orders</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>About Us</a></li>
                <li className="px-[1.5vw] cursor-pointer hover:text-gray-600"><a>Contact</a></li>
            </ul>
        </nav>
        </div>
        <div className="flex flex-row items-center w-[20vw] min-w-fit">
            <div className="font-bold cursor-pointer"  onClick={() => navigate("/cart")}><i className="fa-solid fa-cart-shopping px-1.5 "></i>Cart <span className="rounded-full text-[#8B024B]">{Array.isArray(cart)&& cart.length>0?cart.length:0}</span></div>
            <div>
                {user?( 
               <div id="authContainer" className="relative pl-[5vw]">
               <div
                   id="userAvatar"
                   className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold cursor-pointer"
                   onClick={() => setMenuOpen(!menuOpen)}
               >
                   PFP
               </div>

               {menuOpen && (
                   <div
                       id="userMenu"
                       className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-48 text-black z-50"
                   >
                       <button
                           id="logoutButton"
                           onClick={() => {
                               logout();
                               setMenuOpen(false);
                           }}
                           className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-b-lg"
                       >
                           Logout
                       </button>
                   </div>)}
                   </div>
                ):(
                    <div>
                  <button className="mx-[1.5vw] font-semibold" onClick={() => navigate("/login")}>Log In</button>
                <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] " onClick={() => navigate("/login")}>Sign Up<i className="fa-solid fa-arrow-right px-1"></i></button>
                    </div>
            )}
               
            </div>
        </div>
    </header>
  );
};

export default Header;
