import { generateToken } from "../utils/token"
import { postData } from "../utils/api.js"
import { validation } from "../utils/regex.js"


let form = document.forms.singUp

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {};
    const fn = new FormData(form);

    const isFormValid = validation();

    if (!isFormValid) {
        console.log("Form is invalid");
        return;
    };

    fn.forEach((value, key) => {
        user[key] = value.trim();
    });

    let token = generateToken(16);

    postData("users", { ...user, token })
        .then(res => {
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("token", res.data.token);
            window.location.replace("/")
        }
    )
        .catch(error => {
            console.error(error)
        })
};