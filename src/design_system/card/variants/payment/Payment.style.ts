import styled from 'styled-components';

const Container = styled.div.attrs({
    className: "w-full p-3 flex flex-col border-2 items-center rounded-md border-purple-800"
})`max-width: 300px; min-width: 200px; max-height: 600px; min-height: 400px`;

export default {
    Container
};