import styled, {css} from 'styled-components';

export default styled.button`
    font-family: 'arial';
    font-size: 1.3rem;
    border: 2px solid;
    border-radius: 5px;
    padding: 7px 10px;
    background-color: Transparent;
    margin: 20px 10px;
    ${(props) =>
        props.border &&
        css`
            border-color:${(props) => props.border};
    `}
    color: white;
    cursor: pointer;
`;