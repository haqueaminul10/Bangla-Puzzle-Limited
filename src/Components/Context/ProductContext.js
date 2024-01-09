import React, { useEffect, useState } from "react";
import { createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [filteredP, setFilteredP] = useState([]);
  useEffect(() => {
    const filterProduct = filteredP.filter((product) => {
      return product.title.toLowerCase().includes(searchProducts.toLowerCase());
    });
    setProducts(filterProduct);
  }, [searchProducts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
        setFilteredP(data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, setSearchProducts, searchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
