import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../theme/index'
import MainRightSide from './MainRightSide/MainRightSide';
import Basket from './Basket/Basket';

const Main = () => {
  
    return (
        <MainStyled>
            <Basket />
            <MainRightSide/>
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 25% 1fr;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 30% 1fr;
  }
  @media screen and (max-width: 980px) {
    grid-template-columns: 40% 1fr;
  }
`