import React, { createContext, useState, useEffect } from 'react';

// Create a Context for Products
export const ProductContext = createContext();

// ProductProvider component to wrap the app with product context
export const ProductProvider = ({ children }) => {
    const basicUrl = 'http://localhost:3000'; // Replace with your backend API URL
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null); // For storing the fetched product by ID

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${basicUrl}/api/products`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (err) {
                setError('Failed to load products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // Fetch data only once when the component mounts

    // Add a new product
    const addProduct = async (newProduct) => {
        try {
            const response = await fetch(`${basicUrl}/api/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const addedProduct = await response.json();
            setProducts((prevProducts) => [...prevProducts, addedProduct]);
        } catch (err) {
            setError('Failed to add product');
            console.error(err);
        }
    };

    // Update an existing product
    const updateProduct = async (updatedProduct) => {
        try {
            const response = await fetch(`${basicUrl}/api/products/${updatedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to update product');
            }

            const updatedData = await response.json();
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedData.id ? updatedData : product
                )
            );
        } catch (err) {
            setError('Failed to update product');
            console.error(err);
        }
    };

    // Delete a product
    const deleteProduct = async (productId) => {
        try {
            const response = await fetch(`${basicUrl}/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
        } catch (err) {
            setError('Failed to delete product');
            console.error(err);
        }
    };

    // Fetch a product by its ID
    const fetchProductById = async (id) => {
        try {
            const response = await fetch(`${basicUrl}/api/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }

            const data = await response.json();
            setSelectedProduct(data.product); // Set the selected product state
        } catch (err) {
            setError('Failed to fetch product');
            console.error(err);
        }
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                selectedProduct, // Provide the selected product data
                loading,
                error,
                addProduct,
                updateProduct,
                deleteProduct,
                fetchProductById, // Provide the function to fetch product by ID
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
