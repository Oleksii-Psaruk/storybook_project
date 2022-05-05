

import { Payment } from "../variants/payment/Payment";

import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: "Card",
    component: Payment,
    // argTypes: {
    //     button: {
    //         label: { control: "text" }
    //     }
    // }
} as ComponentMeta<typeof Payment>

const Template: ComponentStory<typeof Payment> = (args) => <Payment { ...args } />;

export const PaymentCard = Template.bind({})
PaymentCard.args = {
    title: { title: "MacBook Pro", weight: "font-medium", size: "text-4xl" },
    cost: 12,
    information: [
        { subTitle: "MacBook pro", info: "(13-inch, M1, 2020)" },
        { subTitle: "Chip", info: "Apple M1" },
        { subTitle: "Memory", info: "16 GB" }
    ],
    button: {
        label: "More information"
    }
};