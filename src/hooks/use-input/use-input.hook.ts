import React from "react";

interface IUseInput {
    state: string
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void
}

const useInput = (value?: string ):IUseInput => {
    const [state, setState] = React.useState(value? value : '')

    const handleChange = (event:React.FormEvent<HTMLInputElement>) => {
        setState(state => state = event.currentTarget.value)
    }

    return {state, handleChange};
}

export default useInput;