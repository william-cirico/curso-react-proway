import { notification } from "antd";
import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContext {    
    user: any;
    signIn: (login: string, password: string, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
}

const AuthContext = createContext<IAuthContext>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null);

    function signIn(login: string, password: string, callback: VoidFunction) {
        if (login === "react@proway.com" && password === "1234") {
            setUser("react@proway.com");
            callback();
        } else {
            notification["error"]({ message: "Erro!", description: "Login inválido" });
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

export const useAuth = () => useContext(AuthContext);