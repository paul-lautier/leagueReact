import { createContext, useState } from "react"

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@user')) ?? null)
    const [error, setError] = useState(null)

    return (
        <AuthContext.Provider value={{ user, setUser, error, setError }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider