import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SideBarContext";
import CloseIcon from "@mui/icons-material/Close";

function CartItem({ item }) {
  // destructure the item
  const { id, title, image, price, amount } = item;
  const { addToCart, increaseAmount, decreaseAmount, removeFromCart } =
    useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-gray-500 hover:underline"
            >
              {title}
            </Link>
            <p className="text-sm font-bold">${price}</p>
            <CloseIcon
            style={{ color: "red" }}
              onClick={() => removeFromCart(id)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div
              onClick={() => decreaseAmount(id)}
              className="flex flex-1 max-w-[100px] items-center h-full border text-primary border-primary cursor-pointer"
            >
              <RemoveIcon style={{ color: "red" }} />
            </div>
            <div
              onClick={() => increaseAmount(id)}
              className="flex flex-1 max-w-[100px] items-center h-full border text-primary border-primary cursor-pointer"
            >
              <AddIcon style={{ color: "green" }}  />
            </div>
            <p className="flex flex-1 max-w-[100px] font-extrabold items-center h-full">
              {price * parseInt(amount).toFixed(2)}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
