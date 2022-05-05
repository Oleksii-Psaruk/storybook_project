import React, {FC} from 'react';
import S from "./Payment.style";
import {IButtonProps} from '../../../button/Types';
import {Button} from '../../../button/Button';
import {ITitleProps} from '../../../title/Types';
import {Title} from '../../../title/Title';

interface IPaymentProps {
    title: ITitleProps,
    cost?: number,
    information?: Array<{ subTitle: string, info: string }>
    button: TButtonPropsModify
}

type TButtonPropsModify = Omit<IButtonProps, "variant" | "isWidthFull">

export const Payment: FC<IPaymentProps> = ({ title, cost, information, button }) => {

    if(123) {

    } else {

    }
    return (
        <S.Container>
            <div className="flex flex-col items-center justify-between w-full h-full">
                <div className="w-full flex items-center flex-col">
                    <Title {...title} />
                    <span className="mt-5">
                        <Title title={`$ ${cost} / m`} size={'text-xl'} weight={'font-semibold'}/>
                    </span>
                    <ul>
                        {
                            information?.map(({info, subTitle}) => {
                                return (
                                    <div key={subTitle}>
                                        <span>
                                            {subTitle}
                                        </span>
                                        <span>
                                            {info}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <section className="w-full">
                    <Button variant={'primary'} {...button} isWidthFull/>
                </section>
            </div>
        </S.Container>
    );
};