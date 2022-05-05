import { Modal } from "./Modal";
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {useState} from 'react';
import {Button} from '../button/Button';

export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <>
            <Button label={"Open Modal"} onClick={() => setVisible(true)} />
            <Modal {...args} visible={visible} setVisible={setVisible} buttonsGroup={{ primary: { label: "Accept", onClick: () => setVisible(false) }, secondary: { label: "Cancel", onClick: () => setVisible(false) } }} />
        </>
    )
}

export const ModalComponent = Template.bind({});
ModalComponent.args = {
    title: "Title", content: "Lorem Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making",
}
