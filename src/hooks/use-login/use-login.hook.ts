import { useCookies } from "react-cookie";

const useLogin = () => {
    const [ cookies, setCookies, removeCookie] = useCookies();
    const login = () =>{
        if (cookies.name === '12' && cookies.password === '123') {
            console.log(cookies.name + ': ' + cookies.password);
        }
        else{
            console.log('No');
        }
    }
    return login
}

export default useLogin;
