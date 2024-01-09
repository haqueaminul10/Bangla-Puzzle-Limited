import React, { useContext } from "react";
//IMPORT COMPONENTS
import { CartContext } from "../Context/CartContex";

function Cart({ item }) {
  const { id, image, price, title, quantity } = item;

  const { removeCart, increaseProduct, decreaseProduct } =
    useContext(CartContext);

  return (
    <>
      <div className="border-2 border-sky-500 p-1 grid grid-cols-3 my-2 relative ">
        <section className="">
          <img className="h-24 w-24" src={image} alt="product" />
        </section>
        <section className=" col-span-2">
          <span className="block">{title}</span>
          <span>Price:${parseFloat(quantity * price).toFixed(2)}</span>
          <div className="flex justify-between items-center absolute inset-x-0 bottom-0 ">
            <div className="ml-32">
              <span
                onClick={() => decreaseProduct(id)}
                className="px-2 border-2 border-sky-500 cursor-pointer"
              >
                -
              </span>
              <span className="px-2">{quantity}</span>
              <span
                onClick={() => increaseProduct(id)}
                className="px-2 border-2 border-sky-500 cursor-pointer"
              >
                +
              </span>
            </div>
            <div className="cursor-pointer" onClick={() => removeCart(id)}>
              remove
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
