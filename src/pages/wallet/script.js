export function createWalletsElement(wallet) {
    const div = document.createElement("div");
    div.id = "one";

    const p1 = document.createElement("p");
    p1.textContent = wallet.name;

    const p2 = document.createElement("p");
    p2.textContent = wallet.currency;

    div.append(p1, p2);
    return div
}