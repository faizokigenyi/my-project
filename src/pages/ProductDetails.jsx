import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

function ProductDetails() {
  const { id } = useParams();
  const { data } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // get product by id
  const product = data.find((item) => {
    return item.id === parseInt(id);
  });

  console.log("product", product);

  if (!product) {
    return (
      <section classNameName="h-screen flex justify-center items-center">
        loading...
      </section>
    );
  }
  console.log("product", product);

  //   destructure product
  const { image, title, price, description } = product;

  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="flex items-center justify-center h-[460px] rounded-lg bg-gray-100">
              <img
                className="w-auto h-full object-cover"
                src={image}
                alt="Product Image"
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {title}
            </h2>

            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
                  ${price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-black dark:text-gray-300 text-sm mt-2">
                {description}
              </p>
            </div>
            <div className="flex mt-6 -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="w-full bg-yellow-500 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
              <div className=" w-1/2 px-2">
                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
