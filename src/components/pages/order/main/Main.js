import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

const Main = () => {
    return (
        <MainStyled>
            {/* <div className="basket">Basket</div> */}
            <Menu />
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
  border: 2px solid green;
  height: 100vh;
`;