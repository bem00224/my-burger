import React from 'react'
import styled from 'styled-components';
import Button from './Button';

export default function Cards({imageSource,title, leftDescription}) {
  return (
    <CardStyled className="produit">
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
        <div className="left-description">{leftDescription}</div>
        <div className="right-description">
          <Button className="primary-button" label={"Ajouter"} />
        </div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  
`;