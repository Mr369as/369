// Функція для отримання ціни BTC через API
async function fetchBTCPrice() {
    try {
        const response = await fetch('https://api.bybit.com/v5/public/spot/tickers?symbol=BTCUSDT');
        const data = await response.json();
        const price = data.result[0].lastPrice;

        // Оновлюємо контент на сторінці
        document.getElementById('btcPrice').innerText = price + " USDT";
    } catch (error) {
        document.getElementById('btcPrice').innerText = 'Помилка завантаження';
    }
}

// Оновлюємо дані кожні 5 секунд
setInterval(fetchBTCPrice, 5000);

// Викликаємо функцію одразу для початкового завантаження
fetchBTCPrice();
