import { header } from "../../Components/heder";

header()

export function TransactionElement(transaction) {
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