import React from 'react';
import { HiCursorClick } from "react-icons/hi"
import styled from 'styled-components';
import { theme } from '../../../../../theme';

const HintMessage = () => {
    return (
        <HintMessageStyled>
            <span className="hint">Cliquer sur un produit pour le modifier</span>
            <HiCursorClick />
        </HintMessageStyled>
    );
}

export default HintMessage;

const HintMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  position: relative;
  top: 50px;

  span {
    margin-right: 10px;
  }
`;