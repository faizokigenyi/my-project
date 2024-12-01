import React, { Component, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

function Home() {
  const { data, loading, error } = useContext(ProductContext);
  console.log("data", data);

  return (
    <div>
    <Hero />
      <section className="py-16 px-5 ">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
            max-w-sm mx-auto md:max-w-none"
          >
            {data.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
