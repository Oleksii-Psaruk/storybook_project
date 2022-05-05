import {Title} from './Title';
import {ComponentStory} from '@storybook/react';

export default {
    title: "Title",
    component: Title
}

const Template: ComponentStory<typeof Title> = (args) => <Title { ...args } />;

export const TitleComponent = Template.bind({});
TitleComponent.args = {
    title: "Test Label",
}
