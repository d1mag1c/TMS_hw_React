import styled from "styled-components";


export const Title = styled.div`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  display: flex;
  align-items: center;
  margin: 32px 0;
`

export const InputBlock = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 32px;

  div {
    margin: 0;
  }

  div:last-of-type input {
    //opacity: 0;
  }

`
export const WrapperTextArea = styled.div`
  textarea {
    width: 100%;
    height: max-content;
    min-height: 100px;
  }

  div:last-of-type textarea {
    min-height: 200px;
  }
`
export const TextAreaBlock = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

`

export const TextArea = styled.textarea<{ error?: boolean }>`

  margin: 3px 0;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid ${props => props.error ? 'red' : 'grey'};
  resize: none;
`

export const BlockErrorButton = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
    `
export const ButtonBlockError = styled.div`
  display: flex;
  align-items: center;
  color: red;
`
export const Button1 = styled.button`
  width: 125px;
  height: 56px;
  background: #E8E8E8;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  border-radius: 5px;
  color: black;

  &:hover {
    background: #bebebe;
  }
`
export const Button2 = styled.button`
  width: 143px;
  height: 56px;
  margin-left: 20px;
  background: #2231AA;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-radius: 5px;

  &:hover {
    background: #06105e;
  }
`
export const ButtonBlock = styled.div`
    display: flex;

    `