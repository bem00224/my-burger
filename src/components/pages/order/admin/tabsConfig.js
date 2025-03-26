import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = (currentTabSelected) => [
    {
      index: "add",
      icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      className : currentTabSelected === "add" ? "is-active" : ""
    },
    {
      index: "edit",
      icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      className: currentTabSelected==="edit" ? "is-active" : ""
    },
  ]