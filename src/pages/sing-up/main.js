import { generateToken } from "../utils/token"
import { postData } from "../utils/api.js"
import { validation } from "../utils/regex.js"


let form = document.forms.singUp

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {}

    let fn = new FormData(form)

    fn.forEach((value, key) => {
        if (validation(key, value)) {
            user[key] = value
        } else {
            alert("неправильный ввод")
        }
    });

    let token = generateToken(16)
    postData('users', { ...user, token })
        .then(res => {
            localStorage.setItem("userId", res.data.id)
            localStorage.setItem("token", res.data.token)
            window.location.href = '/'
            console.log(res.data)
        })
}