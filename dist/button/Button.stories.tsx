import { Button } from "./Button";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SyntheticEvent} from 'react';
import { Title, Description, Primary, ArgsTable, Stories, Wrapper, Meta } from '@storybook/addon-docs';

export default {
    title: "Button",
    component: Button,
    //  *** decorator ***
    // decorators: [fn => <Center>{fn()}</Center>]
    argTypes: {
        isWidthFull: { control: "boolean", name: "Width of the button", description: "If you set TRUE, you will have button which display on full screen " },
        onClick: { control: "clicked" }
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    variant: "primary",
    label: "Button",
    onClick: (e: SyntheticEvent<HTMLButtonElement>) => {},
}
PrimaryButton.parameters = {
    docs: {
        page: () => (
            <Wrapper>
                <Meta />
                <Title />
                <Description>This is Primary Button</Description>
                <Primary  />
                <ArgsTable />
                <Stories  />

            </Wrapper>
        ),
        source: {
            code: "<Button label='Button' variant='primary' onClick=(e: SynteticEvent<HTMLButtonElement>) => {}  />"
        }
    }
}

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    variant: "secondary",
    label: "Button"
}