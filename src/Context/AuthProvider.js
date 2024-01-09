import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { useState, useEffect, createContext } from "react";
import { Spin } from "antd";

export const AuthContext = createContext();
console.log(AuthContext);
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  // const
  useEffect(() => {
    const unsubcribed = auth.onAuthStateChanged((userInfo) => {
      console.log(userInfo);
      if (userInfo) {
        const { displayName, email, uid, photoURL } = userInfo.providerData[0];
        console.log(user);
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        navigate("/");
      } else {
        navigate("/login");
      }
      setIsLoading(false);
    });

    return () => {
      unsubcribed();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
