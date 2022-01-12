const inputTypes = Object.freeze({
    PASSWORD: "password",
    EMAIL: "e-mail",
    PHONE: "phone"
});

const regular = {
    phone: /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
    email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

const errorMessage = {
    phone: 'Введите корректный номер телефона',
    email: 'Введите корректный e-mail',
    password: 'Пароль должен содержать: минимум 8 символов, хотя бы одну цифру'
}

const placeHolder = {
    phone: '+79999999999',
    email: 'example@itmo.ru',
    password: 'Ваш пароль'
}

const headValue = {
    phone: "Телефон",
    email: "E-mail",
    password: "Пароль"
}
export {inputTypes, regular, errorMessage, placeHolder, headValue};