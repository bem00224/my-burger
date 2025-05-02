import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";

export const getTabsConfig= (hasAlreadyBeenClicked) => [
    {
      index: "add",
      icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      content: <AddForm/>,
    },
    {
      index: "edit",
      icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      content: hasAlreadyBeenClicked ? <EditForm/> : <HintMessage />,
    },
]

export const getTabSelected = (tabs,currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)

