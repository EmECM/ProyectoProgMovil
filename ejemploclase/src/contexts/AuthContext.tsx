import { createContext, useContext, useState } from "react";

type User = {
    id?: string;
    email: string;
    token?: string;
} | null;

type AuthContextType = {
    user: User;
    isAllowed: boolean;
    //login: (email: string, password: string)=>Promise<void>;
    login: (email: string, password: string)=>boolean;
    //register: (email: string, password: string)=>Promise<void>;
    register: (email: string, password: string)=>boolean;
    logout: ()=>{};
}

//1. Definir contexto
const AuthContext = createContext<AuthContextType | null>(null)

//2. Utilizar el contexto: Hook personalizado
export const useAuth = () => {
    const context = useContext(AuthContext);

};

//3. definicion de Context Provider
export const AuthProvider = ({children}: {children: React.ReactNode})=>{
    const[user, setUser] = useState<User>(null);
    const[isAllowed, setisAllowed] = useState<boolean>(false);

    const login = (email:string, password: string)=>{
        const allowed = email.endsWith('.edu');
        if(allowed){
            setUser({email})
            setisAllowed(allowed)
        }
        return allowed;
    }

    return{
        <AuthContext.Provider value={{}}>
        </AuthContext.Provider>
    }
}