import React, { Fragment, useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../provider/AuthProvider'

const Layout = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const logout = async () => {
        await signOut(auth)
            .then(() => {
                localStorage.removeItem('@user')
                navigate('/login')
            })
    }

    return (
        <div>
            <h1>League React</h1>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/search'>Search</Link>
            {user && (
                <Fragment>
                    <p>Bonjour {user?.email}</p>
                    <button onClick={() => logout()}>Logout</button>
                </Fragment>
            )}

            {/* Render route children's ! */}
            <Outlet />
        </div>
    )
}

export default Layout