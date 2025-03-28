import React, { useContext } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import OrderContext from '../../../../context/OrderContext';
import AdminPanel from './AdminPanel/AdminPanel';


export default function Admin() {
  //state
  const { isCollapsed} = useContext(OrderContext)
  //comportements
  //affichage
  return (
    <AdminStyled>
      <AdminTabs/>
      {!isCollapsed && <AdminPanel/>}
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;