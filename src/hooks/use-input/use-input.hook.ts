import React from "react";

interface IUseInput {
    state: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useInput = (value?: string ):IUseInput => {
    const [state, setState] = React.useState(value? value : '')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setState(state => state = event.target.value)
    }

    return {state, handleChange};
}

export default useInput;