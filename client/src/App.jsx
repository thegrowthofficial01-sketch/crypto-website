import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { ForgotPassword } from './pages/ForgotPassword'
import { Dashboard } from './pages/Dashboard'
import { Products } from './pages/Products'
import { ProductDetail } from './pages/ProductDetail'
import { Wallet } from './pages/Wallet'
import { Deposit } from './pages/Deposit'
import { Transactions } from './pages/Transactions'
import { Profile } from './pages/Profile'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { toast, Toaster } from 'react-hot-toast'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-crypto-darker text-crypto-text">
          <Navbar />
          <AppRoutes />
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              className: 'bg-crypto-panel border border-crypto-border text-crypto-text',
              style: {
                background: '#111114',
                border: '1px solid #1f2937',
                color: '#f3f4f6',
              },
            }}
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}