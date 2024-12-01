import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SideBarContext";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import mgSvg from "../assets/mg.svg";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <div className="flex border shadow-sm   flex-row items-center justify-between p-5 ">
      <div className="flex flex-row items-center">
        <div className="flex flex-col ml-2">
          <h1 className="font-bold text-5xl md:text-6xl text-yellow-700">Mia-G</h1>
          <h2 className="text-xs text-gray-600">Online Store</h2>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex relative flex-row items-center justify-center"
      >
        {" "}
        <div className="cursor-pointer text-yellow-700">
          <ShoppingCartOutlinedIcon fontSize="large" className="cursor-pointer   " />
        </div>
        <p className="text-xs bg-green-900 text-white w-4 h-4 rounded-full flex justify-center items-center absolute top-6 right-0">
          {itemAmount}
        </p>
      </div>
    </div>
  );
}

export default Header;
