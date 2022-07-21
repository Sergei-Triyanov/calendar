import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useCookies } from 'react-cookie';

type THabdleChangeCookie = (email:string, password:string)=>void;

const useLogun = ():THabdleChangeCookie => {
    const [cookies, setCookies, removeCookie] = useCookies(['name', 'password', 'status']);
    const navigate = useNavigate();

    const handleChangeCookies = (name:string, password:string) => {
        if(password.length >= 6 && name.length) {
            removeCookie('name', {path: '/'});
            removeCookie('password', {path: '/'});
            removeCookie('status', {path: '/'});
            setCookies('name', name, {path: '/'});
            setCookies('password', password, {path: '/'});
            setCookies('status', 'unactivated', {path: '/'});
            navigate('/', {replace: true});
        }
    }
    return handleChangeCookies;
}

export default useLogun;
