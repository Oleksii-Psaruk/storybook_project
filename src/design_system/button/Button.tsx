import React, {FC} from 'react';
import S from "./Button.style";
import {IButtonProps} from './Types';

export const Button: FC<IButtonProps> = ({ label, variant = "secondary", isWidthFull, onClick  }) => {
    return (
        <S.ButtonContainer>
            <S.Button onClick={onClick} variant={variant} isWidthFull={isWidthFull}>
                {label}
            </S.Button>
        </S.ButtonContainer>
    );
};