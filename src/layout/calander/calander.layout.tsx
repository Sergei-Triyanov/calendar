import React, { useEffect } from "react";
import { useCookies  } from "react-cookie";
import { FlexS, H1S } from "../../elements";
import { useNavigate } from "react-router-dom";

const Calendar:React.FC = ():JSX.Element => {
    const [cookies] = useCookies();
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.status === 'unactivated'){
            navigate('/', { replace: true })
            console.log(cookies.status)
        }  
    }, [cookies])

    return (
        <FlexS>
            <H1S>Calendar</H1S>
        </FlexS>
    )
}

export default Calendar;
