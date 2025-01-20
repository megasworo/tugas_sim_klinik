import { createContext, useContext, useState } from "react";
const NavbarContext = createContext();

// eslint-disable-next-line react/prop-types
export const NavbarProvider = ({children}) => {
const [isOpen, setIsOpen] = useState(false)

    return (
        <NavbarContext.Provider value={{isOpen, setIsOpen}}>
            {children}
        </NavbarContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useNavbar = () => {
    return useContext(NavbarContext)
}