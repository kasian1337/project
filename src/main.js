import { scheckAcces } from "./pages/utils/token"
import { getData } from "./pages/utils/api"
import { header } from "./Components/heder"

header()
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
console.log(userId);


getData(`users/${userId}`)
    .then(res => showUser(res.data))
    .catch(error => console.error(error))


getData(`wallets?userId=${userId}`)
    .then(res => createWalletElement(res.data[4]))
    .catch(error => console.log(error))

export function createWalletElement(wallet) {
    const div = document.createElement("div");

    const p1 = document.createElement("p");
    p1.textContent = wallet.type;

    const p2 = document.createElement("p");
    p2.textContent = wallet.currency;

    div.append(p1, p2);
    return div
}

getData(`transactions?userId=${userId}`)
    .then(res => createTransactionElement(res.data))
    .catch(error => console.log(error))

export function createTransactionElement(transaction) {
    const tr = document.createElement("tr"); // Создаём строку

    // Создаём ячейки вручную, чтобы правильно обработать walletType
    const tdId = document.createElement("td");
    tdId.textContent = transaction.id;

    const tdCategory = document.createElement("td");
    tdCategory.textContent = transaction.category;

    const tdAmount = document.createElement("td");
    tdAmount.textContent = transaction.amount.toLocaleString(); // Красивый формат суммы

    const tdWallet = document.createElement("td");
    tdWallet.textContent = transaction.walletType.name; // Доступ к "VISA"

    const tdDate = document.createElement("td");
    tdDate.textContent = transaction.createdAt;
    tr.append(tdId, tdWallet, tdCategory, tdAmount, tdDate);

    return tr
}
