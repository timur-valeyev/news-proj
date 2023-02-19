export const validateForm = (formData) => {
    let errors = {}

    switch (true) {
        case !formData.surName:
            errors.surName = 'Поле не может быть пустым'
        case !formData.firstName:
            errors.firstName = 'Поле не может быть пустым'
        case !formData.lastName:
            errors.lastName = 'Поле не может быть пустым'
        case !formData.comment:
            errors.comment = 'Поле не может быть пустым'
        case !formData.email:
            errors.email = 'Поле не может быть пустым'
        case !/\S+@\S+\.\S+/.test(formData.email):
            errors.email = 'Неправильный формат email'
        case !formData.phone:
            errors.phone = 'Поле не может быть пустым'
        case !/^\d{11}$/.test(formData.phone):
            errors.phone = 'Номер телефона должен состоять из 11 цифр'
        default:
            break
    }

    return errors
}