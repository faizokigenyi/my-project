import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SideBarContext";
import CartProvider from "./contexts/CartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
    <SidebarProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </SidebarProvider>
    </CartProvider>
  </StrictMode>
);
