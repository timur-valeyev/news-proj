import {useValidate} from "./useValidate";
import {useState} from "react";


export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidate(value, validations)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onBlur = (event) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}