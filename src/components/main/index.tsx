import React, {ReactNode} from 'react';
import {MainBlock} from "./style";

type MainProps = {
    children: ReactNode
}

const Main = ({children}: MainProps ) => {
    return (
        <MainBlock>
            {children}
        </MainBlock>
    );
};

export default Main;