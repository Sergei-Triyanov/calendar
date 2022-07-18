import styled from "styled-components";

interface IBox {
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    padding?: string;
}

const BoxS = styled.div<IBox>`
    padding-top: ${props => props.paddingTop};
    padding-right: ${props => props.paddingRight};
    padding-bottom: ${props => props.paddingBottom};
    padding-left: ${props => props.paddingLeft};
    padding: ${props => props.padding};
    background-color: inherit;
    margin: 0;
`
export default BoxS;
