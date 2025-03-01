import { getData } from "../utils/api.js";

let form = document.forms.add_transaction
export function createDataTransaction(transaction) {
    let option = document.createElement('option')
    
    form.onsubmit = (e) => {
        e.preventDefault()
        let fn = new FormData(form)
        let balance = fn.get('balance')
        let category = fn.get('category')
        let createdAt = new Date()
        let user = {
            category: category,
            amount: balance,
            walletType: {
                userId: userId,
                name: "Visa"
            },
            createdAt: createdAt
        }
    }
}


console.log(form);
let userId = localStorage.setItem('userId')


getData(`transactions?userId=${userId}`)
    .then(res => createDataTransaction(res.data))
    .catch(error => console.log(error))