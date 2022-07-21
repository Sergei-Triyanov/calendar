import React from "react";
import { BoxS, ButtonS, FlexS, H1S, TextS } from "../../elements";
import { useInput, useLogun } from "../../hooks";
import { InputS } from "../../moduls";

const Logun:React.FC = ():JSX.Element => {
    const {state: name, handleChange: handleChangeLogin} = useInput();
    const {state: password, handleChange: handleChangePassword} = useInput();
    const logun = useLogun();
    return (
        <>
            <BoxS
            padding='14px 0'>
                <FlexS flexDirection="column">
                    <BoxS padding='4px 0'>
                        <FlexS alignItems="center" justifyContent="center">
                            <TextS color="#0f0e0e" size="16px">Create your name.</TextS>
                        </FlexS>
                    </BoxS>
                    <InputS
                    type='text'
                    padding='8px 16px'
                    borderRadius='8px'
                    width="420px"
                    placeholder='Please enter your name'
                    onChange={handleChangeLogin}
                    value={name}
                    required
                    />
                </FlexS>
            </BoxS>
            <FlexS flexDirection="column">
                        <BoxS padding='4px 0'>
                            <FlexS alignItems="center" justifyContent="center">
                                <TextS color="#0f0e0e" size="16px">Create your password.</TextS>
                            </FlexS>
                        </BoxS>
                    </FlexS>
            <InputS
            type='password'
            padding='8px 16px'
            borderRadius='8px'
            width="420px"
            placeholder='Please enter your password'
            onChange={handleChangePassword}
            value={password}
            min={6}
            required
            />
            <FlexS justifyContent="flex-end" alignItems="center" flexDirection="row"> 
                <BoxS padding='8px 0'>
                    <ButtonS 
                    type='submit'
                    padding="4px 8px"
                    background="#6365d4"
                    border="none"
                    color="#c2bbbb"
                    radius="4px"
                    onClick={() => logun(name, password)}
                    >
                        Create Account
                    </ButtonS>
                </BoxS>
            </FlexS>  
        </>
    )
}

export default Logun;
