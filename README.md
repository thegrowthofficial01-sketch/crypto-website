# Crypto Investment Website

A complete crypto investment platform with:
- Firebase Authentication (Sign Up / Sign In)
- Systematic Investment Plans (SIPs) with high-quality visuals
- Trust Wallet integration via WalletConnect v2
- Real blockchain deposit verification
- Fake leaderboard on homepage (refreshes every 10 seconds)
- Dark mode crypto theme

## Tech Stack
- React 18 + Vite
- Tailwind CSS (dark mode)
- Firebase Auth + Firestore
- WalletConnect v2 + ethers.js
- Framer Motion animations
- Chart.js for portfolio charts

## Setup

1. Install dependencies:
```bash
cd client
npm install
```

2. Create a Firebase project at https://console.firebase.google.com
3. Enable Authentication (Email/Password) and Firestore Database
4. Copy `.env.example` to `.env` and fill in your Firebase config keys
5. Run the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## Features
- **Auth:** Sign up, sign in, forgot password, protected routes
- **Products:** SIP investment cards with calculator
- **Wallet:** Connect Trust Wallet, view connected address
- **Deposit:** Platform wallet address with QR code for real crypto deposits
- **Leaderboard:** Fake investors ticker on homepage (refreshes every 10s)
- **Dashboard:** Portfolio balance, transactions, charts