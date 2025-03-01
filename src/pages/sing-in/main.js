import { getData } from "../utils/api.js"


let form = document.forms.singIn

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)

    let email = fn.get("email")
    let password = fn.get("password")

    getData(`users?email=${email}`)
        .then(res => {
            let user = res.data[0]
            if (email == user.email) {
                if (password == user.password) {
                    localStorage.setItem("token", res.data.token)
                    window.location.href = '/'
                } else {
                    alert('password is wrong')
                }
            } else {
                alert('пользователь не найден')
            }
        })

        .catch(error => console.error(error))
}


