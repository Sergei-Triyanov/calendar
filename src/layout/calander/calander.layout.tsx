import React, { useEffect } from "react";
import { useCookies  } from "react-cookie";
import { BoxS, FlexS, H1S } from "../../elements";
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
        <FlexS width="100vw" height="100vh" flexDirection="column">
            <FlexS width="100%" height="100%">
                <FlexS width="160px" height="100%" background="linear-gradient(#797878 20%,#bebebe 80%)"></FlexS>
                <FlexS justifyContent="flex-start" alignItems="center" width="100%" background="linear-gradient(to right, #797878,#bebebe)" flexDirection="column">
                    <BoxS padding="8px 0">
                        <H1S color='#505050'>Calendar</H1S>
                    </BoxS>
                    <FlexS width="100%" height="100%" backgroundColor="#bebebe">

                    </FlexS>
                </FlexS>
                <BoxS></BoxS>
            </FlexS>
        </FlexS>
    )
}

export default Calendar;
