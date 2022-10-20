import styled from "styled-components";

export const MainBlock = styled.section`
  display: flex;
  flex-direction: column;
  margin: 62px auto 20px;
  width: 1120px;

  @media (max-width: 1180px) {
    width: 100%;
    padding: 0 20px;
  }
`
export const BlogTabs = styled.div`
    display: flex;
  flex-direction: column;
  margin-bottom: 64px;
    `
export const Blog = styled.h1`
    font-size: 56px;
  font-family: 'Inter', serif;
    `
