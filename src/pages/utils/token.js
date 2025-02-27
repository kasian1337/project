export function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }

    return token;
}

export function scheckAcces() {
    let token = localStorage.getItem('token')

    if (!token) {
        window.location.href = './src/pages/sing-up/index.html'
    }
}