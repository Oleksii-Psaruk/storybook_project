import styled from 'styled-components';
import {ITitleProps} from './Types';

type TStyledTitleProps = Pick<ITitleProps, "color" | "weight" | "size">

const Title = styled.p.attrs(({ color, weight, size }: TStyledTitleProps) => {
    return {
        className: `${color} ${weight} ${size}`
    }
})<TStyledTitleProps>``;

export default {
    Title
};