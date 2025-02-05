import React, { useContext,useEffect, useState } from "react";
import Header from "./header";
import FooterPage from "./footer";
import ProductPageProducts from "./ProductPageProducts";
import { ProductContext } from "../utils/ProductsContext";
const ProductPage = () => {
  const {  products,selectedProduct,fetchProductById,fetchProducts }=useContext(ProductContext);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [productsAvail,setProductsAvail]=useState(false)
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesSet, setCategoriesSet] = useState([]);
  const [sortOption, setSortOption] = useState('');

  const handlePriceRangeClick = (priceRange) => {
    
    setSelectedPriceRanges((prevRanges) => {
      if (prevRanges.includes(priceRange)) {
        return prevRanges.filter((range) => range !== priceRange);
      } else {
        return [...prevRanges, priceRange];
      }
    });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const isProductInPriceRange = (price) => {
    if (selectedPriceRanges.length === 0) return true; 
    return selectedPriceRanges.some((range) => {
      const [minPrice, maxPrice] = range.split('-').map((p) => parseFloat(p.trim().substring(1)));
      return price >= minPrice && price <= maxPrice;
    });
  };
  
  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoriesSet.length === 0 || categoriesSet.some((category) => category.categoryid === product.categoryid);
    const matchesPriceRange = isProductInPriceRange(product.price);

    return matchesSearchQuery && matchesCategory && matchesPriceRange;
  }).sort((a, b) => {
    switch (sortOption) {
      case 'price_asc':
        return a.price - b.price; // Low to High
      case 'price_desc':
        return b.price - a.price; // High to Low
      case 'rating':
        return b.rating - a.rating; // Highest rating first
      case 'newest':
        return new Date(b.createdat) - new Date(a.createdat); // Newest first
      default:
        return 0; 
    }});

  useEffect(() => {
    // Fetch categories from the backend API
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://twisca-gpel.vercel.app/api/categories'); 
        const data = await response.json();
        setCategories(data); 
        console.log(data)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
    useEffect(() => {
      setProductsAvail(true)
      fetchProducts()
      console.log(products)
      }, []);

      const handleCategoryClick = (category) => {
        if (!categoriesSet.find((item) => item.categoryid === category.categoryid)) {
          setCategoriesSet((prevSet) => [...prevSet, category]);
        }
      };
    
      const handleFilterRemove = (categoryId) => {
        setCategoriesSet((prevSet) => prevSet.filter((item) => item.categoryid !== categoryId));
      };
  return (
    <>
      <Header></Header>
      <div className="flex flex-row justify-between w-full px-[5vw]">
        <div id="SideBar" className="w-[23vw] hidden md:flex flex-col px-3">
          <div className="text-center border border-[#414141] w-full rounded-[0.5vw] overflow-hidden">
            <div className="bg-[#8B024B] text-white py-[2vh] px-4">
              TOP CATEGORY
            </div>
            <div>
              <ul className="text-left pl-[4vw] py-[2vh]">
              {categories.length > 0 ? (
        categories.map((category, index) => (
          <li key={index} className="py-[1vh]" onClick={() => handleCategoryClick(category)} >{category.categoryname}</li> // Assuming each category has a 'name' field
        ))
      ) : (
        <li className="py-[1vh]">No categories available</li>
      )}
              </ul>
            </div>
          </div>
          <div className="text-center border border-[#414141] w-full mt-[3vh] rounded-[0.5vw] overflow-hidden">
            <div className="bg-[#8B024B] text-white py-[2vh] px-4">
              PRICE RANGE
            </div>
            <div>
              {/* Price Range Filters */}
      <ul className="text-left pl-[3vw] py-[2vh]">
        {['$0.00 - $50.00', '$51.00 - $100.00', '$101.00 - $200.00', '$200.00 - $1000.00'].map((range, index) => (
          <li key={index} className="py-[1vh]">
            <input
              type="checkbox"
              checked={selectedPriceRanges.includes(range)}
              onChange={() => handlePriceRangeClick(range)} // Toggle price range on click
            />
            <span className="pl-[1vw]">{range}</span>
          </li>
        ))}
      </ul>
            </div>
          </div>
          <div></div>
        </div>

        <div id="products" className=" h-[10vh] w-full md:w-[63.5vw]">
          <div className="font-bold text-[2rem] mb-[4vh]">
            Our Collection of Products
          </div>
          <div className="relative">
            <i className="fas fa-search absolute right-[0.3vw] z-50 cursor-pointer bg-[#8B024B] p-2.5 rounded-full text-white top-[0.3vh]"></i>
            <input
              type="text"
              placeholder="Search An Item"
              className="w-full rounded-3xl px-3 py-2 border-[#5F5F5F] border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>

          <div className="flex flex-row pt-[1.5vh] justify-between">
            {/* Filtewrs  */}
            <div className="flex flex-row justify-between">
            {categoriesSet.length > 0 && (
        <div className="flex flex-row justify-between">
          {categoriesSet.map((category) => (
            <span
              key={category.categoryid}
              className="flex items-center border border-[#8B024B] py-0.5 mr-3 px-2.5 rounded-[3px] text-[#8B024B] justify-between"
            >
              <p className="text-sm">{category.categoryname}</p>
              <i
                className="pl-2.5 fa-solid fa-close cursor-pointer"
                onClick={() => handleFilterRemove(category.categoryid)} // Remove filter on click
              />
            </span>
          ))}
        </div>
      )}
            </div>
            {/* Sort By */}
            <div className="flex items-center ">
              <select
                id="sort"
                className=" rounded-lg  text-sm text-[#8B024B] font-semibold"
                onChange={handleSortChange}>
                <option value="" selected>
                  Sort By
                </option>
                <option value="price_asc">Low to High</option>
                <option value="price_desc">High to Low</option>
                {/* <option value="rating">Rating</option> */}
                {/* <option value="newest">Newest</option> */}
              </select>
            </div>
          </div>
          {/* <p className="text-sm font-semibold pt-[2vh]">Showing 1-09 of 24 item(s)</p> */}
          <div className="flex flex-wrap flex-row justify-between mt-[1vh] max-h-[58vh] overflow-y-scroll">
          {productsAvail && Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductPageProducts
            key={product.productid}
            productid={product.productid}
            productName={product.productname}
            currentPrice={product.price}
            originalPrice={product.oldprice}
            description={product.description}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}    </div>
          {/* <div className="flex flex-col justify-center items-center text-center w-[22vw] mx-auto py-[2vh]">
          <p className="text-xs text-[#414141] font-semibold py-[2vh]">Showing 1-09 of 24 item(s)</p>
          <p className="flex border border-gray-600 h-0.5 w-full mb-[2vh] bg-gray-600"></p>
          <button className="bg-[#8B024B] text-white px-4 py-2 rounded-[1vw] w-fit flex">Load More<i className="fa-solid fa-arrow-right px-2 pt-1"></i></button>
          </div> */}
        </div>
      </div>
      <div className="pt-[70vh] md:pt-[50px]">
      <FooterPage></FooterPage>
      </div>
    </>
  );
};
export default ProductPage;
