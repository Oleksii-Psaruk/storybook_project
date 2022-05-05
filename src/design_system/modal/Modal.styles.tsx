import styled from 'styled-components';

const Modal = styled.div.attrs({
    className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
})``;

const Wrapper = styled.div.attrs({
    className: "relative w-auto my-6 mx-auto max-w-3xl"
})``;

const Content = styled.div.attrs({
    className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
})``;

const ModalHeader = styled.section.attrs({
    className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
})``;

const TextWrapper = styled.section.attrs({
    className: "relative p-6 flex-auto"
})``;

const Text = styled.p.attrs({
    className: "my-4 text-slate-500 text-lg leading-relaxed"
})``;

const ButtonsWrapper = styled.section.attrs({
    className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
})``;

export default {
    Text,
    Modal,
    Wrapper,
    Content,
    TextWrapper,
    ModalHeader,
    ButtonsWrapper
};