import { useLocation, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useEffect } from 'react'

const RedirectHelper = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ cookies ] = useCookies();
    useEffect(() => {
        if ( cookies.status === 'active' ) navigate('/calendar', {replace: true})
        else navigate('/login', {replace: true})
    })
    return (
        <></>
    )
}

export default RedirectHelper;
