import React, {FC, ReactElement} from 'react';
import {ITitleProps} from './Types';
import S from "./Title.style";

export const Title: FC<ITitleProps> = ({ title, color = "text-gray-900", weight, size }): ReactElement => {
    return (
        <S.Title color={color} weight={weight} size={size}>
            {title}
        </S.Title>
    );
};