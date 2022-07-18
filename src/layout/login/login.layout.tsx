import React from "react";
import { BoxS, FlexS, H1S } from "../../elements";
import { InputS } from "../../moduls";

const Login:React.FC = ():JSX.Element => {
    return(
        <FlexS
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh">
            <H1S 
                color='#fefefe' 
                letter='4px'
                lineHeight="4rem"
                transform="uppercase">
                    Login
                </H1S>
            <FlexS
                flexDirection="column"
                width="480px"
                height="140px"
                backgroundColor="#57be76"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
                border="2px solid #4de67b"
                >
                <form autoComplete="on" method="post">
                <BoxS 
                    padding='14px 0'>
                    <InputS
                        type='email'
                        padding='8px 16px'
                        borderRadius='8px'
                        width="420px"
                        placeholder='Please enter your name'/>
                </BoxS>
                <InputS
                    type='text'
                    padding='8px 16px'
                    borderRadius='8px'
                    width="420px"
                    placeholder='Please enter your password'/>  
                </form>
            </FlexS>
        </FlexS>
    )
}

export default Login;
