export function validation(inputName, value) {
    let regexs = {
        name: /^[\p{L}]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
        surname: /^[\p{L}]+$/
    }
    return regexs[inputName]?.test(value) || false;
}