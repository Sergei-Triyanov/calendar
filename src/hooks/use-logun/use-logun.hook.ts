import React from 'react'
import { useCookies } from 'react-cookie';

type THabdleChangeCookie = (email:string, password:string)=>void;

const useLogun = ():THabdleChangeCookie => {
    const [cookies, setCookies, removeCookie] = useCookies(['name', 'password']);
    const handleChangeCookies = (email:string, password:string) => {
        const name = email.split('@')[0]
        removeCookie('name', {path: '/'})
        removeCookie('password', {path: '/'})
        setCookies('name', name, {path: '/'})
        setCookies('password', password, {path: '/'})
    }
    return handleChangeCookies;
}

export default useLogun;
