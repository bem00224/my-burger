import { createContext } from "react";

export default createContext ({
    isModeAdmin: false,
    setIsModeAdmin: () => {},
    isTabSelected: "",
    setIsTabSelected: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {},
    isAddSelected: true,
    setIsAddSelected: () => {},
    isEditSelected: false,
    setIsEditSelected: () => {},
    currentTabSelected: false,
    setCurrentTabSelected: () => {},
    menu: [],
    setMenu : () => {},
    handleAdd : () => {},
    handleDelete: () => {},
    resetMenu: () => {},

    newProduct: [],
    setNewProduct: () => {},

})