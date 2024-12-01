import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SidebarContext } from "../contexts/SideBarContext";

function SideBar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, addToCart, clearCart, total, itemAmount } =
    useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-[0]" : "-right-full"
      } w-full bg-gray-100 fixed top-0 h-full shadow-2xl
      md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {itemAmount > 0 ? (
        <>
          <div className="flex items-center justify-between py-6 border-b">
            <div>
              <h2 className="font-bold text-md">
                Shopping Cart ({itemAmount})
              </h2>
            </div>
            <div
              onClick={handleClose}
              className="cursor-pointer w-8 h-8 flex justify-center items-center"
            >
              <ArrowForwardIcon />
            </div>
          </div>
          <div className=" flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden ">
            <div className="bg- flex flex-col gap-y-3 py-4 mt-4">
              <div className="flex w-full flex justify-between items-center">
                <div className="uppercase font-semibold">
                  <span className="mr-2">total:</span> $
                  {parseFloat(total).toFixed(2)}
                </div>
                <div>
                  <div
                    onClick={clearCart}
                    className="cursor-pointer bg-red-800 py-4 text-white w-12 h-12 flex justify-center
                      backdrop: items-center"
                  >
                    <DeleteOutlineIcon />
                  </div>
                </div>
              </div>

              <Link className="w-full px-4 font-medium bg-green-200 py-4 justify-center items-center text-primary">
                Check out
              </Link>
            </div>
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden justify-center items-center">
          <h1 className="font-bold text-lg">Your cart is currently empty</h1>
          <Link onClick={handleClose} to="/" className="flex items-center my-8">
            <ArrowForwardIcon />
            Shop
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideBar;
