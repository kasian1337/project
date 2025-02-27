import { createTransactionElement, createWalletElement } from "../../main";
import { createWalletsElement } from "../wallet/script";
import { getData } from "./api";
import { render } from "./render";

let userId = localStorage.getItem("userId")

let wallets = document.querySelector(".wallets")
let wallet = document.querySelector(".wallet")

let transaction = document.querySelector('.data-transaction')


getData(`wallets?userId=${userId}`)
    .then(res => render(res.data, wallets, createWalletElement))
    .catch(error => console.log(error))

getData(`transactions?userId=${userId}`)
    .then(res => render(res.data, transaction, createTransactionElement))
    .catch(error => console.error(error))

getData(`wallets?userId=${userId}`)
    .then(res => render(res.data, wallet, createWalletsElement))
    .catch(error => console.log(error))