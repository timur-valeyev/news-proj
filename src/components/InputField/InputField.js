import {useState} from 'react'
import classes from './InputField.module.css'

const InputField = (props) => {
    const [focused, setFocused] = useState(false)
    const { onChange, ...inputProps } = props

    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
        <>
            <input
                className={classes.input}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
        </>
    )
}


export default InputField
