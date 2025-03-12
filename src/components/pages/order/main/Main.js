import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyled>
            Main
        </MainStyled>
    );
}

export default Main;

const MainStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
  background-color: red;
`;