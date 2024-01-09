import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT ICON
import { IoMdGitCompare } from "react-icons/io";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

//IMPORT COMPONENTS
import TextArea from "./TextArea";
import { CartContext } from "../Context/CartContex";
import Cart from "../Pages/Cart";
import { ProductContext } from "../Context/ProductContext";

function Navbar() {
  const { cart, totalPrice } = useContext(CartContext);
  const { products, setSearchProducts, searchProducts } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const [search, setsearch] = useState("");

  return (
    <>
      <nav className="grid grid-cols-1 grid-cols-2 grid-cols-3 my-1  ">
        <div className="text-2xl mx-5 font-bold   ">
          <h1 onClick={() => navigate(`/`)}>Ecommerce</h1>
        </div>
        <div>
          <TextArea
            type="text"
            id="search"
            name="search"
            value={searchProducts}
            onChange={(e) => setSearchProducts(e.target.value)}
            placeholder="Search ..."
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="flex justify-end items-center mx-5   ">
          <div className="mx-3 text-2xl font-bold">
            <IoMdGitCompare />
          </div>
          <div className="mx-3 text-2xl font-bold">
            <FaRegHeart />
          </div>
          {/* CART SECTION */}
          <div className="mx-3 text-2xl font-bold">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4">
                  <div className="flex justify-center items-center">
                    <FaShoppingCart />
                    <span className="mt-2 bg-black text-stone-50 rounded-full">
                      {cart.length}
                    </span>
                  </div>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <div className="menu w-96 min-h-full bg-base-200 text-base-content relative">
                  {cart.length === 0 ? (
                    <div>
                      <h1 className="text-2xl text-center">
                        No Product in Cart
                      </h1>
                    </div>
                  ) : (
                    <div>
                      {cart.length
                        ? cart.map((item, index) => {
                            // console.log("here is items", item);
                            return (
                              <div key={index}>
                                <Cart item={item} />
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  )}
                  <h3 className="text-2xl text-center absolute inset-x-0 bottom-0 bg-white ">
                    Total: {totalPrice}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-wide bg-cyan-500 hover:bg-cyan-600 text-2xl mx-5 font-bold">
            All Categories
          </button>
        </div>
        <div>
          <ul className="flex justify-between items-center list-none ">
            <li className="text-xl p-2  hover:text-white cursor-pointer">
              Home
            </li>
            <li className="text-xl p-2 hover:text-white cursor-pointer">
              About
            </li>
            <li className="text-xl p-2 hover:text-white cursor-pointer">
              Blog
            </li>
            <li className="text-xl p-2 hover:text-white cursor-pointer">
              Pages
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <p>Free Shipping on Orders $500+</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
