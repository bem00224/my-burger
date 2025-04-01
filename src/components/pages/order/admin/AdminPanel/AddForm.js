import React, { useContext } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

export default function AddForm() {
  //state
  const { handleAdd } = useContext(OrderContext)
  
  const newProduct = {
    id: new Date().getTime(),
    imageSource: "https://mounetlebled.com/wp-content/uploads/2022/11/8691216019805.jpg",
    title: "Nouveau produit",
    price: 7.556,
  }


  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    handleAdd(newProduct)
  }
  
  const handleChange = (e) => {
    console.log("hanChange")
  }
  
  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" onChange={handleChange} />
        <input type="text" placeholder="Image URL" onChange={handleChange} />
        <input type="text" placeholder="Prix" onChange={handleChange} />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  )
}
const AddFormStyled = styled.form`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1 / 1 / 4 / 2;
  }

  .input-fields {
    background: blue;
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4 / -2 / -1 / -1;
    width: 50%;
  }
`;