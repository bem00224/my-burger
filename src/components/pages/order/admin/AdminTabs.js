import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from '../../../../context/OrderContext';
import Tab from '../../../reusable-ui/Tab';
import { FaChevronUp,FaChevronDown } from "react-icons/fa";



export default function AdminTabs() {
  //state
  const { isCollapsed, setIsCollapsed, isAddSelected, setIsAddSelected, isEditSelected, setIsEditSelected } = useContext(OrderContext)
  const tabsConfig = [
    {
      index: "add",
      icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      onClick : () => selectTab("add"),
      className : isAddSelected ? "is-active" : ""
    },
    {
      index: "edit",
      icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : ""
    },
  ]
  const tabs = tabsConfig
  //comportements
  
  const selectTab = (tabSelected) => {
    setIsCollapsed(false)

    if (tabSelected === "add") {
      setIsAddSelected(true)
      setIsEditSelected(false)
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true)
      setIsAddSelected(false)
    }
  }
  
  
  //affichage
  return (
    <AdminTabsStyled>
      <Tab 
        Icon={ isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed) }
        className={isCollapsed ? "is-active" : ""}
      />
      {/*
      <Tab 
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={() => selectTab("add")}
        className={isAddSelected ? "is-active" : ""}
      />
      <Tab 
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={() => selectTab("edit")}
        className={isEditSelected ? "is-active" : ""}
      /> 
      */}
      {tabs.map((tab) => (
        <Tab 
          key={tab.index}
          Icon={tab.icon}
          label={tab.label}
          onClick={ tab.onClick }
          className={ tab.className }
        />
      ) ) }
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  display: flex;

  .is-active {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px;
  }

  button {
    margin-left: 1px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .btn-icon {
      padding-right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;