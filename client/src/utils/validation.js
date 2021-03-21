export const validate = (values, schema) => {
    let errors = {}

    Object.keys(schema).forEach(key => {
        if (schema[key].hasOwnProperty('required')) {
            if (!required(values[key])) {
                errors[key] = 'Поле не может быть пустым'
            }
        }

        if (schema[key].hasOwnProperty('min')) {
            if (!min(values[key], schema[key]['min'])) {
                errors[key] = `Длина поля должна превышать ${schema[key]['min']} символов`
            }

        }

        if (schema[key].hasOwnProperty('max')) {
            if (!max(values[key], schema[key]['max'])) {
                errors[key] = `Длина поля не должна превышать ${schema[key]['max']} символов`
            }

        }
    })

    return errors
}

const required = value => {
    return !!value.length
}

const min = (value, num) => {
    return value.length > num
}

const max = (value, num) => {
    return value.length < num
}