import { postData } from "../utils/api"

let form = document.forms.add_wallet

let userId = localStorage.getItem('userId')

form.onsubmit = (e) => {
    e.preventDefault()

    let fn = new FormData(form)
    let type = fn.get('type')
    let currency = fn.get('currency')
    let user = {
        type: type,
        currency: currency,
        balance: "10000",
        userId: userId
    }

    
    postData('wallets', user)
    .then(res => console.log(res))
    .catch(error => console.error(error))
}

