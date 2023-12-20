import React from "react";
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase/config";
import { useState, useEffect } from "react";
import { Spin, Button } from "antd";

export const AuthContext = React.createContext()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const navigate = useNavigate();
    // const 
    const handleNav = useEffect(() => {
        const unsubcribed = auth.onAuthStateChanged((user) => {
            console.log('edeefe') 
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                    displayName, 
                    email, 
                    uid, 
                    photoURL
                });
                setIsLoading(false);
                navigate('/');
            }
            navigate('/login')
        })

        return () => {
            unsubcribed();
        }

    }, [])
    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}