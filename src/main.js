import { scheckAcces } from "./pages/utils/token"
import { getData } from "./pages/utils/api"

scheckAcces()
let userId = localStorage.getItem('userId')


function showUser(user) {
    let email = document.querySelector('#email')
    let emailTwo = document.querySelector('#email_two')
    let span = document.querySelector('#name')
    email.textContent = user.email
    emailTwo.textContent = user.email
    span.textContent = user.surname + ' ' + user.lastname
}
// axios.get(`${url}/${userId}`)
getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => console.error(error))


getData(`wallets?userId=${userId}`)
    .then(res => createWalletElement(res.data))
    .catch(error => console.log(error))

export function createWalletElement(wallet) {
    const div = document.createElement("div");
    div.id = "one";

    const p1 = document.createElement("p");
    p1.textContent = wallet.name;

    const p2 = document.createElement("p");
    p2.textContent = wallet.currency;

    div.append(p1, p2);
    return div
}
getData(`transactions?userId=${userId}`)
    .then(res => createTransactionElement(res.data))
    .catch(error => console.log(error))

export function createTransactionElement(transaction) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headers = ['ID', 'Отправлено с кошелька', 'Категория', 'Сумма транзации', 'Когда'];
    const headerRow = document.createElement('tr');

    headers.forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        headerRow.append(th);
    });

    transaction.forEach(rowData => {
        const row = document.createElement('tr');
        ['id', 'wallet', 'category', 'amount', 'date'].forEach(key => {
            const td = document.createElement('td');
            td.textContent = rowData[key];
            row.append(td);
        });
    });    
    
    tbody.append(row);
    thead.append(headerRow);
    table.append(thead);
    table.append(tbody);
    return table
}