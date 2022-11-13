import React, {ReactNode} from 'react';
import {MainBlock} from "./style";

export type MainProps = {
    children: ReactNode
}

const Main = ({children}: MainProps) => {

    return (
        <MainBlock>
            {children}
        </MainBlock>
    );
};

export default Main;