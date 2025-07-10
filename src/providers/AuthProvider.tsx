import { createContext } from 'react'

const AuthContext = createContext({ isLoggedIn: false })

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = true // ← lógica

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
