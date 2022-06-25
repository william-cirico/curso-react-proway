import { notification } from "antd";
import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
    user: any;
    signIn: (login: string, password: string, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(null);

    function signIn(login: string, password: string, callback: VoidFunction) {
        if (login === "react@proway.com" && password === "react") {
            setUser("proway");
            callback();
        } else {
            notification["error"]({ message: "Erro!", description: "Login ou senha inválidos" });
        }
    }
    
    function signOut(callback: VoidFunction) {
        setUser(null);
        callback();
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}