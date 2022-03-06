const inputTypes = Object.freeze({
    PASSWORD: "password",
    EMAIL: "e-mail",
    PHONE: "phone",
    LASTNAME: 'lastname',
    NAME: 'name',
    PATRONYMIC: 'patronymic',
});

const regular = Object.freeze({
    PHONE: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
    EMAIL:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    PASSWORD:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    LASTNAME: /.?/,
    NAME: /.?/,
    PATRONYMIC: /.?/
})

const errorMessage =Object.freeze( {
    PHONE: 'Введите корректный номер телефона',
    EMAIL: 'Введите корректный e-mail',
    PASSWORD: 'Пароль должен содержать: минимум 8 символов, хотя бы одну цифру',
    LASTNAME: '',
    NAME: '',
    PATRONYMIC: ''
})

const placeHolder = Object.freeze({
    PHONE: '+79999999999',
    EMAIL: 'example@itmo.ru',
    PASSWORD: 'Ваш пароль',
    LASTNAME: 'Фамилия',
    NAME: 'Имя',
    PATRONYMIC: 'Отчество'
})

const headValue = Object.freeze({
    PHONE: "Телефон",
    EMAIL: "E-mail",
    PASSWORD: "Пароль",
    LASTNAME: 'ФИО',
    NAME: '',
    PATRONYMIC: ''
})

const hasChangeIcon = Object.freeze({
    PHONE: true,
    EMAIL: true,
    PASSWORD: true,
    LASTNAME: true,
    NAME: false,
    PATRONYMIC: false
})
export {inputTypes, regular, errorMessage, placeHolder, headValue, hasChangeIcon};