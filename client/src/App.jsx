import React from 'react'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import AuthProvider from './provider/AuthProvider'
import ProtectedRoute from './routes/ProtectedRoute'

const App = () => {
  return (
    <AuthProvider>

    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>

      
    </AuthProvider>
  )
}

export default App