import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import OrderContext from '../../../../context/OrderContext';
import Tab from '../../../reusable-ui/Tab';
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import { getTabsConfig } from './tabsConfig';



export default function AdminTabs() {
  //state
  const { isCollapsed, setIsCollapsed, currentTabSelected, setCurrentTabSelected } = useContext(OrderContext)
  
  const tabs = getTabsConfig()
  //comportements
  const selectTab = (tabSelected) => {
    setIsCollapsed(false)
    setCurrentTabSelected(tabSelected)
  }
  
  //affichage
  return (
    <AdminTabsStyled>
      <Tab 
        Icon={ isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed) }
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab 
          key={tab.index}
          Icon={tab.icon}
          label={tab.label}
          onClick={ () => selectTab(tab.index) }
          className= { currentTabSelected===tab.index ? "is-active" : ""}
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
  }
`;

/*
  Autre methode
  comportements
  
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
    affichage
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
  */