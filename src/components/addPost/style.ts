import styled from "styled-components";


export const Title = styled.div`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  display: flex;
  align-items: center;
  margin: 32px 0;
`

export const WrapperBlock = styled.div`
  display: flex;
  justify-content: space-around;
  
  `

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 40%;
`

export const ImgBlock = styled.div`
width: 40%;
  padding: 20px;
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin: 10px 0;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid black;
  
`

export const InputButton = styled.input`
  width: 200px;
  border-radius: 10px;
  height: 50px;
  cursor: pointer;
  background: #fca7a7;
  margin: 10px 0;
`


export const ImgForm = styled.img`
    width: 100%;
  height: 100%;
  object-fit: cover;
    `
