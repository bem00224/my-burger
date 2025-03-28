import React, { useContext } from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import OrderContext from '../../../../context/OrderContext';
import { tabsConfig, getTabSelected } from './tabsConfig';

export default function AdminPanel() {
  const {currentTabSelected} = useContext(OrderContext)
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs,currentTabSelected)
  return (
    <AdminPanelStyled>
      <div>{ tabSelected.label}</div>
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;