# Trading Algorithm Dashboard

## Overview
This is a Trading Algorithm Dashboard that visualizes real-time market data and identifies trading signals based on Simple Moving Average (SMA) crossovers. It fetches BTC/USDT price data from Binance and applies a 5-period and 20-period SMA to detect buy/sell signals.

## Features
- Fetches real-time BTC/USDT market data from Binance API
- Computes 5-period and 20-period SMAs
- Identifies and displays buy/sell crossover signals
- Interactive chart using Chart.js
- Themed UI with Dark and Light modes
- Responsive and user-friendly interface

## Tech Stack
- **Frontend:** React.js, Chart.js
- **Backend:** Binance API (for real-time market data)
- **Other Libraries:** Axios, React Simple Typewriter

## API Used
This project utilizes the **Binance API** to fetch real-time cryptocurrency market data. The API endpoint used:
```plaintext
https://api.binance.com/api/v3/klines
```
### How to Get Binance API
1. Visit the [Binance API Documentation](https://binance-docs.github.io/apidocs/spot/en/).
2. You can use the public endpoints without authentication for basic market data.
3. For advanced features (trading, account info), you need an API key:
   - Sign up at [Binance](https://www.binance.com/)
   - Go to **API Management** under your profile settings
   - Create a new API key and follow security instructions
   
## Installation
1. Clone the repository:
   ```bash
   https://github.com/Akash-Kumar-2/Assessment--Algorithmic-Trading-Focus-.git
   cd trading-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
```
trading-dashboard/
│-- src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── MarketChart.js
│   │   ├── MarketInfo.js
│   │   ├── CrossoverSignal.js
│   ├── App.js
│   ├── index.js
│-- public/
│-- package.json
│-- README.md
```

## Usage
- The dashboard automatically fetches market data every 60 seconds.
- Click **"View Graph"** to scroll to the trading chart.
- Buy signals are displayed in **green**, and sell signals in **red**.

## Screenshots
![Image](https://github.com/user-attachments/assets/4caf6eed-5e1e-4706-a11a-292441477fd2)
![Image](https://github.com/user-attachments/assets/9c1b774a-019d-4347-b6a4-04b4f002a149)
![Image](https://github.com/user-attachments/assets/9f58f827-a73b-4663-b58e-cce207bf9e02)
![Image](https://github.com/user-attachments/assets/e504013d-e5e9-406b-811e-9a56239cd54b)
![Image](https://github.com/user-attachments/assets/e152d174-ae94-45bf-b81e-95834bdc1e00)
![Image](https://github.com/user-attachments/assets/315e9bb9-f3be-4d12-883c-ef5bfb437448)
![Image](https://github.com/user-attachments/assets/8005de83-05fe-41a6-89bc-092070362e6b)
![Image](https://github.com/user-attachments/assets/154067a9-a83b-4a71-a673-8a5a511f4697)
## Future Enhancements
- Implement additional trading indicators (RSI, MACD)
- Add historical data analysis
- Improve UI/UX with animations and better visualization

## License
This project is open-source and available under the [MIT License](LICENSE).

