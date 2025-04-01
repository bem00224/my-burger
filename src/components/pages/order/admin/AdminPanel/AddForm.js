import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import OrderContext from '../../../../../context/OrderContext';

const EMPTY_PRODUCT = {
  id: "",
  imageSource: "",
  title: "",
  price: 0,
}

export default function AddForm() {
  //state
  const { handleAdd } = useContext(OrderContext)
  //const [title, setTitle] = useState("")
  //const [price, setPrice] = useState(0)
  //const [imageSource, setImageSource] = useState("")
  const [ newProduct, setNewProduct ] = useState(EMPTY_PRODUCT)
  
  /*const newProduct = {
    id: new Date().getTime(),
    imageSource: "https://mounetlebled.com/wp-content/uploads/2022/11/8691216019805.jpg",
    title: "Nouveau produit",
    price: 7.556,
  }*/


  //comportements
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime()
    }
    handleAdd(newProductToAdd)
    setNewProduct("")
  }
  
  const handleChange = (e) => {
    const newValue = e.target.value
    const name = e.target.name
    setNewProduct({...newProduct, [name]:newValue})
  }
 
  
  //affichage
  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" name="title" value={newProduct.title} onChange={handleChange} />
        <input type="text" placeholder="Image URL" name="imageSource" value={newProduct.imageSource} onChange={handleChange}/>
        <input type="text" placeholder="Prix" name="price" value={newProduct.price ? newProduct.price : ""} onChange={handleChange} />
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