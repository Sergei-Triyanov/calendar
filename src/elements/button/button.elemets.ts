import styled from "styled-components";

interface IButton {
    width?: string;
    height?: string;
    color?: string;
    size?: string;
    image?: string;
    background?: string;
    border?: string;
    shadow?: string;
    padding?: string;
    radius? : string;
}

const ButtonS = styled.button<IButton>`
    display: block;
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    box-shadow: ${props => props.shadow};
    font-size: ${props => props.size};
    background-image: ${props => props.image};
    border: ${props => props.border};
    padding: ${props => props.padding};
    background-color: ${props => props.background};
    border-radius: ${props => props.radius};
    outline: none;
    transition: opacity .2s ease;
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
`

export default ButtonS;
