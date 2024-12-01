import React, { useState, createContext } from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        console.log("handle close");
        setIsOpen(false);
      };

    return (
        <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
