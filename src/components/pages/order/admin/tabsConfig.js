import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";
import EditForm from "./AdminPanel/EditForm";
import HintMessage from "./AdminPanel/HintMessage";
import { FiSettings } from "react-icons/fi";
import Button from "../../../reusable-ui/Button";
import { Form } from "react-router-dom";

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
    {
      index: "manger",
      label: "Autre onglet",
      Icon: <FiSettings />,
      Content: <UnComposant />,
    },
]

export const getTabSelected = (tabs,currentTabSelected) => tabs.find((tab) => tab.index === currentTabSelected)

export function UnComposant() {
  return (
    <Form
      product={{
        id: "1",
        imageSource: "/images/burger1.png",
        title: "Burger 1",
        price: 5.297,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      }}
    >
      <div style={{ width: "50%" }}>
        <Button version="normal" label={"Bonjour"} />
      </div>
    </Form>
  )
}
