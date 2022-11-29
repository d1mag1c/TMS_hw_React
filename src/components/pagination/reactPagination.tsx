import React from "react";
import ReactPaginate from "react-paginate";

import { StyledPaginateContainer } from "./style";


export const PaginationBlock = ({ handlePageClick, count }: any) => {


    return (
        <>
            <StyledPaginateContainer >
                <ReactPaginate
                className="pagination "
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={Math.ceil(count / 20)}
                previousLabel="<"
            />
            </StyledPaginateContainer>
        </>
    );
};