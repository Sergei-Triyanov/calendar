import styled from "styled-components";

interface IFlex {
    justifyContent?: "space-between" | "center" | "flex-end" | "flex-start";
    alignItems?: "center" | "flex-start" | "flex-end";
    flexDirection?: "row" | "column";
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    shadow?: string;
    border?: string;
    background?: string
}

const FlexS = styled.div<IFlex>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-direction: ${props => props.flexDirection};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    box-shadow: ${props => props.shadow};
    background: ${props => props.background};
`

export default FlexS;