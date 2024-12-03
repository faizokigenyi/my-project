import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
// ...

export default function Product({ product }) {
  const { id, image, description, price, title } = product;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-md relative border hover:shadow-2xl  hover:border-[#f8f8f6] transition-all duration-200">
      <div className="border  border-[#edf4f1] h-auto relative overflow-hidden group transition mb-4 ">
        <div className="w-full   h-[200px] flex flex-col justify-center items-center">
          <div className="w-full relatibve  mx-auto flex justify-center items-center">
            <img 
              className="max-h-[200px] pt-2   group-hover:opacity-60 group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />

            <Link
              className="opacity-0 group-hover:opacity-100 transition duration-300
            absolute top-[10px] left-[20px] "
              to={`/product/${id}`}
            >
              <RemoveRedEyeIcon className="text-2xl font-bold text--900" />
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[1rem] uppercase font-extrabold mb-2  mx-auto lg:mx-0">{title}</h3>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex items-center gap-2  justify-around">
          <span className="font-bold text--sm"> $ {price}</span>
          <button
            onClick={() => addToCart(product, id)}
            className="bg-yellow-500 hover:bg-gray-600 hover:text-white text-gray-800 font-bold py-2 px-4 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>

    
    </div>
  );
}
