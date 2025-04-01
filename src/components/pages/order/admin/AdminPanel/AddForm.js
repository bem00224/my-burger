import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

export default function AddForm() {
  //state
  const { handleAdd } = useContext(OrderContext)
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [imageSource, setImageSource] = useState("")
  
  /*const newProduct = {
    id: new Date().getTime(),
    imageSource: "https://mounetlebled.com/wp-content/uploads/2022/11/8691216019805.jpg",
    title: "Nouveau produit",
    price: 7.556,
  }*/


  //comportements
  const handleSubmit = (e) => {

    const newProduct = {
      id: new Date().getTime(),
      imageSource: imageSource,
      title: title,
      price: price,
    }
    e.preventDefault()
    handleAdd(newProduct)
  }
  
  /*const handleChange = (e) => {
    const { title, price, value } = e.target
  }*/
 const handleTitleChange = (e) => {
   setTitle(e.target.value)
 }
 const handlePriceChange = (e) => {
   setPrice(e.target.value)
 }
 const handleImageChange = (e) => {
  setImageSource(e.target.value)
 }
 
  
  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" value={title} onChange={handleTitleChange} />
        <input type="text" placeholder="Image URL" value={imageSource} onChange={handleImageChange}/>
        <input type="text" placeholder="Prix" value={price ? price: ""} onChange={handlePriceChange} />
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