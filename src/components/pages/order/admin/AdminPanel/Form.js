import React from "react"
import styled from "styled-components"
import { getInputTextsConfig } from "./inputTextsConfig"
import ImagePreview from "./ImagePreview"
import Input from "../../../../reusable-ui/Input"


const Form = React.forwardRef(({ product, onSubmit, onChange, children }, ref) => {
    // state (vide)
  
    // comportements (vide)
  
    const inputTexts = getInputTextsConfig(product)
  
    // affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <Input
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    )
  })
  
  export default Form

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 798px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    width: 100%;
    grid-row-gap: 16px;
    
    .input-fields {
      grid-area: auto;
    }

    .form-footer {
      grid-area: auto;
      justify-content: center;
    }
  }

`
