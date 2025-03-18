import React, { useState } from 'react'
import styled from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';


export default function Admin() {
  //state
  
  //comportements
  //affichage
  return (
    <AdminStyled>
      <AdminTabs/>
      <AdminPanel/>
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
  height: 30vh;
  background-color: blue;
`;