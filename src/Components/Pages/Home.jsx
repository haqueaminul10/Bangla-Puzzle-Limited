import React, { useContext, useState } from "react";

//IMPORT COMPONENETS
import Layout from "../Layouts/Layout";
import { ProductContext } from "../Context/ProductContext";
import Product from "./Product";

function Home() {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Layout />
      <div className=" grid grid-cols-4 gap-4 m-5  ">
        {products.map((product) => {
          return (
            <div className=" mx-auto p-4 " key={product.id}>
              <Product key={product.id} product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
