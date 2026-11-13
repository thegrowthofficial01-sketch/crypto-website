import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser)
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        if (userDoc.exists()) {
          setProfile(userDoc.data())
        }
      } else {
        setProfile(null)
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const signUp = async (email, password, name) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', res.user.uid), {
      uid: res.user.uid,
      email,
      name,
      balance: 0,
      walletAddress: '',
      createdAt: new Date().toISOString(),
    })
    setProfile({ email, name, balance: 0, walletAddress: '', uid: res.user.uid })
    return res.user
  }

  const signIn = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    const userDoc = await getDoc(doc(db, 'users', res.user.uid))
    if (userDoc.exists()) setProfile(userDoc.data())
    return res.user
  }

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email)
  }

  const logout = async () => {
    await signOut(auth)
    setProfile(null)
  }

  const updateProfile = async (updates) => {
    if (!user) return
    await setDoc(doc(db, 'users', user.uid), { ...profile, ...updates }, { merge: true })
    setProfile({ ...profile, ...updates })
  }

  const value = {
    user,
    profile,
    loading,
    signUp,
    signIn,
    resetPassword,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}