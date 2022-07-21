import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [ cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();
    const login = (name:string, password:string) => {
        if (cookies.name === name && cookies.password === password && cookies.status) {
            setCookies('status', 'active', {path: '/', sameSite: 'strict'});
            if (cookies.status === 'active') {
                navigate('/check', {replace: true});
            }
        }
        else{
            console.log('No');
        }
    }
    return login
}

export default useLogin;
