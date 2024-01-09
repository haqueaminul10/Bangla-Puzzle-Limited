import React, { useContext } from "react";

import { FaShoppingCart } from "react-icons/fa";
//IMPORT COMPONENT
import { CartContext } from "../Context/CartContex";

function Product({ product }) {
  //console.log(product);
  //console.log(useContext(CartContext));
  const { id, image, price, rating, title, description, category } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="border p-4 rounded-md shadow-md">
        <div className="bg-cover bg-center">
          <img className="w-72 h-64 rounded-md" src={image} alt="" />
        </div>

        <p className="mt-2 text-gray-600">{category}</p>
        <h3 className="text-lg h-24 font-semibold mt-1">{title}</h3>

        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-700">{rating.rate}</p>
          <p className="text-gray-700">{rating.count} reviews</p>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-lg font-semibold text-green-600">${price}</p>
          <button
            className="btn btn-accent flex items-center"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart className="mr-1" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
