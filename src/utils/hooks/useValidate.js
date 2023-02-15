import {useEffect, useState} from "react";


export const useValidate = (value, validations) => {
    const [minLength, setMinLength] = useState(false)
    const [maxLength, setMaxLength] = useState(false)
    const [isEmptyField, setIsEmptyField] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [notNumbers, setNotNumbers] = useState(false)
    const [validInput, setValidInput] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    break
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLength(true) : setMaxLength(false)
                    break
                case 'isEmptyField':
                    value ? setIsEmptyField(false) : setIsEmptyField(true)
                    break
                case 'emailError':
                    const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    emailRegexp.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
                case 'phoneError':
                    const phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,5}$/im
                    phoneRegexp.test(String(value).toLowerCase()) ? setPhoneError(false) : setPhoneError(true)
                    break
                case 'notNumbers':
                    const notNumbersRegexp = /^([^0-9]*)$/
                    notNumbersRegexp.test(String(value).toLowerCase()) ? setNotNumbers(false) : setNotNumbers(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if(minLength || maxLength || isEmptyField || emailError || phoneError || notNumbers){
            setValidInput(false)
        } else {
            setValidInput(true)
        }
    }, [minLength, maxLength, isEmptyField, emailError, phoneError, notNumbers])

    return {
        minLength,
        maxLength,
        isEmptyField,
        emailError,
        validInput,
        phoneError,
        notNumbers
    }
}
