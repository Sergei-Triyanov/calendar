import styled from "styled-components";

interface IInput {
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    padding?: string;
    borderRadius?: string;
    width?: string;
}

const InputS = styled.input<IInput>`
    background: #2A2F2A;
    color: #fff;
    font-size: 12;
    border: 1px solid #232323;
    padding-top: ${props => props.paddingTop};
    padding-right: ${props => props.paddingRight};
    padding-bottom: ${props => props.paddingBottom};
    padding-left: ${props => props.paddingLeft};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius};
    width: ${props => props.width};
    outline: none;
    &:target{
        border: 2px solid #3b8a53;
    }
    &:focus{
        border: 2px solid #3b8a53;
        box-shadow: 0 0 8px #6868685e;
        background: #353535;
    }
    &:active{
        border: 2px solid #3b8a53;
        background: #353535;
        box-shadow: 0 0 8px #6868685e;
    }
    &:invalid {
        border: 2px solid #f2a29e;
    }
    &:valid {
        border: 2px solid #aeeca1;
    }
`

export default InputS;
