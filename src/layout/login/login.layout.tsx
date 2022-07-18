import React from "react";
import { BoxS, FlexS, H1S, ButtonS } from "../../elements";
import { useInput, useLogun } from "../../hooks";
import { InputS } from "../../moduls";


const Login:React.FC = ():JSX.Element => {
    const {state: login, handleChange: handleChangeLogin} = useInput();
    const {state: password, handleChange: handleChangePassword} = useInput();
    const logun = useLogun() 
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
                <form autoComplete="on" method="post" onSubmit={(event) => event.preventDefault()} >
                <BoxS
                    padding='14px 0'>
                    <InputS
                        type='email'
                        padding='8px 16px'
                        borderRadius='8px'
                        width="420px"
                        placeholder='Please enter your name'
                        onChange={handleChangeLogin}
                        value={login}
                        required
                        />
                </BoxS>
                <InputS
                    type='password'
                    padding='8px 16px'
                    borderRadius='8px'
                    width="420px"
                    placeholder='Please enter your password'
                    onChange={handleChangePassword}
                    value={password}
                    required
                    />
                <FlexS justifyContent="flex-end" alignItems="center" flexDirection="row">
                    <BoxS padding="8px 0">
                        <ButtonS 
                        type='submit'
                        padding="4px 8px"
                        background="#6365d4"
                        border="none"
                        color="#c2bbbb"
                        radius="4px">
                            Login
                        </ButtonS> 
                    </BoxS>   
                    <BoxS paddingLeft='4px'>
                        <ButtonS 
                        type='submit'
                        padding="4px 8px"
                        background="#6365d4"
                        border="none"
                        color="#c2bbbb"
                        radius="4px"
                        onClick={() => {logun(login, password)}}
                        >
                            Logun
                        </ButtonS>
                    </BoxS>
                </FlexS>  
                </form>
            </FlexS>
        </FlexS>
    )
}

export default Login;
