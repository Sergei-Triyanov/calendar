import React, { ReactNode } from "react";
import { FlexS, H1S } from "../../elements";

interface ILog {
    title: string;
    content: ReactNode;
}

const Log:React.FC<ILog> = ({title, content}):JSX.Element =>{
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
                {title}
        </H1S>
        <FlexS
            flexDirection="column"
            width="480px"
            height="200px"
            backgroundColor="#4c504d"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            border="2px solid #acb4af"
            >
            <form autoComplete="on" method="post" onSubmit={(event) => event.preventDefault()} >{
                content
            }
            </form>
        </FlexS>
    </FlexS>
    )
}

export default Log;