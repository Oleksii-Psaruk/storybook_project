import React, {FC, ReactNode} from 'react';
import { CenterWrapper } from "./Center.styles";
import { ICenterProps } from './Types';

export const Center: FC<ICenterProps> = ({children}) => {
    return (
        <CenterWrapper>
            {children}
        </CenterWrapper>
    )
}
