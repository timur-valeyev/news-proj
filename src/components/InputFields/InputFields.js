import React from 'react'
import classes from './InputFields.module.css'
import InputField from '../InputField'

const InputFields = (props) => {
    const {formData, formErrors, handleInputChange} = props

    return (
        <>
            {formErrors.surName && (
                <span className={classes.error}>{formErrors.surName}</span>
            )}
            <InputField
                placeholder='Фамилия'
                name='surName'
                type='text'
                value={formData.surName}
                onChange={handleInputChange}
            />
            {formErrors.firstName && (
                <span className={classes.error}>{formErrors.firstName}</span>
            )}
            <InputField
                placeholder='Имя'
                name='firstName'
                type='text'
                value={formData.firstName}
                onChange={handleInputChange}
            />
            {formErrors.lastName && (
                <span className={classes.error}>{formErrors.lastName}</span>
            )}
            <InputField
                placeholder='Очество'
                name='lastName'
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
            />
            {formErrors.email && (
                <span className={classes.error}>{formErrors.email}</span>
            )}
            <InputField
                placeholder="Email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
            />
            {formErrors.phone && (
                <div className={classes.error}>{formErrors.phone}</div>
            )}
            <InputField
                placeholder="Телефон"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange}
            />
        </>
    )
}


export default InputFields
