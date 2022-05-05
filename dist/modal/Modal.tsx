import React, {Dispatch, FC, ReactElement, SetStateAction} from 'react';
import {Button} from '../button/Button';
import {IButtonProps} from '../button/Types';
import {Title} from '../title/Title';
import S from "./Modal.styles";

type TModifyButtonProps = Omit<IButtonProps, "variant">

interface IModalProps {
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>,
    buttonsGroup: {
        primary: TModifyButtonProps,
        secondary: TModifyButtonProps
    },
    title: string,
    content: string
}

export const Modal: FC<IModalProps> = ({ visible, setVisible, buttonsGroup, title, content }) => {
    return (
        <>
            {visible && (
                <>
                    <S.Modal>
                        <S.Wrapper>
                            <S.Content>
                                <S.ModalHeader>
                                    <Title title={title} size={"text-2xl"} color={"text-gray-900"} weight={"font-medium"} />
                                </S.ModalHeader>
                                <S.TextWrapper>
                                    <S.Text>
                                        {content}
                                    </S.Text>
                                </S.TextWrapper>
                                <S.ButtonsWrapper>
                                    <Button {...buttonsGroup.secondary} variant={"secondary"} />
                                    <Button {...buttonsGroup.primary} variant={"primary"} />
                                </S.ButtonsWrapper>
                            </S.Content>
                        </S.Wrapper>
                    </S.Modal>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            )}
        </>
    );
}