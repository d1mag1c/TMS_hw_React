import styled from "styled-components";

export const StyledPaginateContainer = styled.div`
  .pagination {
    color: #0366d6;
    display: flex;
    margin: 40px auto;
    list-style: none;
    width: max-content;
  }
  
  li {
    margin: 0 10px;
    cursor: pointer;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #0366d6;
    color: white;
  }
`;