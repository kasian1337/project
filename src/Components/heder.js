export function header() {
  let header = document.querySelector('header')

  header.innerHTML = `
    <div class="navigation">
      <a href="/">Главная</a>
      <a href="/src/pages/wallet/">Мои кошельки</a>
      <a href="/src/pages/transaction/">Мои транзакции</a>
    </div>
    <div class="data-exit">
      <p id="email"></p>
      <button id="logout">
      <img src="/log-out (1) 1.svg" alt="">
      <button>
    </div>
    `
  let logout = document.querySelector('#logout')
  logout.onclick = () => {
    localStorage.clear()
    window.location.replace('/src/pages/sing-up/')
  }
}