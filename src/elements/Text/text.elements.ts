import styled from "styled-components";

interface IH {
    color?: string;
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    letter?: string;
    lineHeight?: string;
}
interface IText {
    color?: string;
    weight?: string;
    transform?: 'uppercase' | 'lowercase' | 'capitalize';
    size?: string;
    lineHeight?: string;
    letter?: string;
}

export const H1S = styled.h1<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 32px;
    text-transform: ${props => props.transform};
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`
export const H2S = styled.h2<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 24px;
    text-transform: ${props => props.transform};
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`

export const H3S = styled.h3<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 16px;
    text-transform: ${props => props.transform};
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`

export const H4S = styled.h4<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 12px;
    text-transform: ${props => props.transform};
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`

export const H5S = styled.h5<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 8px;
    text-transform: ${props => props.transform}; 
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`

export const H6S = styled.h6<IH>`
    margin: 0;
    padding: 0;
    color: ${props => props.color};
    font-size: 4px;
    text-transform: ${props => props.transform};
    background-color: inherit;
    letter-spacing: ${props => props.letter};
    line-height: ${props => props.lineHeight};
`

export const TextS = styled.span<IText>`
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: ${props => props.lineHeight};
    letter-spacing: ${props => props.letter};
    background-color: inherit;
`