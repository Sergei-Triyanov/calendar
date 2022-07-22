import React from "react";
import { useNavigate } from "react-router-dom";
import { BoxS, FlexS, ButtonS } from "../../elements";
import { useInput,  useLogin } from "../../hooks";
import { InputS } from "../../moduls";


const Login:React.FC = ():JSX.Element => {
    const {state: login, handleChange: handleChangeLogin} = useInput();
    const {state: password, handleChange: handleChangePassword} = useInput();
    const Login = useLogin()
    // react router dom
    const navigate = useNavigate()
    return(
        <>
        <BoxS
        padding='14px 0'>
            <InputS
            type='text'
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
                    padding="8px 12px"
                    background="#313131"
                    border="none"
                    color="#fefefe"
                    radius="4px"
                    onClick={() => Login(login, password)}>
                        Login
                    </ButtonS> 
                </BoxS>   
                <BoxS padding='8px 4px'>
                    <ButtonS 
                        type='submit'
                        padding="8px 12px"
                        background="#616163"
                        border="none"
                        color="#fefefe"
                        radius="4px"
                        onClick={() => {navigate('/logun', {replace: true})}}
                        >
                        Logun
                    </ButtonS>
                </BoxS>
            </FlexS>
       </>
    )
}

export default Login;
