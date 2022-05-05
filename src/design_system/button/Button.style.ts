import styled from 'styled-components';
import {IButtonProps} from './Types';

const ButtonContainer = styled.div.attrs({
    className: "py-2 px-3"
})``;

type TButton = Pick<IButtonProps, "variant" | "isWidthFull" | "onClick">

const PrimaryStyles = " bg-purple-800 text-white";

const SecondaryStyles = " text-purple-800 "

const Button = styled.button.attrs(({ variant, isWidthFull = false, onClick }: TButton) => {
    const defaultStyles: string[] = [
        "py-2",
        "text-sm",
        "border-2",
        "rounded-md",
        "font-medium",
        "border-purple-800",
    ];
    if(variant === "primary") {
        defaultStyles.push(PrimaryStyles)
    }
    if(variant === "secondary") {
        defaultStyles.push(SecondaryStyles)
    }
    if(isWidthFull) {
        defaultStyles.push("w-full");
    }
    if(!isWidthFull) {
        defaultStyles.push("px-4");
    }
    return {
        onClick,
        className: defaultStyles.join(" "),
    }
})<TButton>``;

export default {
    Button,
    ButtonContainer
}