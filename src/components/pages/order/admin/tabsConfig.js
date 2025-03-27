import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsConfig = (currentTabSelected) => [
    {
      index: "add",
      icon: <AiOutlinePlus />,
      label: "Ajouter un produit"
    },
    {
      index: "edit",
      icon: <MdModeEditOutline />,
      label: "Modifier un produit"
    },
]

export const getTabSelected = (tabs,currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)

