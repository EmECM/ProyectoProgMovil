import { createContext, useContext, useState } from "react";
import { User } from "../types/user";

type AuthContextType = {
    user: User;
    isAllowed: boolean;
    //login: (email: string, password: string)=>Promise<void>;
    login: (email: string, password: string)=>boolean;
    //register: (email: string, password: string)=>Promise<void>;
    //register: (email: string, password: string)=>boolean;
    logout: ()=>void;
}

//COMIENZO DE API CONTEXT

//1. Definir contexto
const AuthContext = createContext<AuthContextType | null>(null)

//2. Utilizar el contexto: Hook personalizado
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error ('useAuth debe usarse dentro del AuthProvider');
    return context;
};

//3. definicion de Context Provider
//apartir de authprovider el estado del componente se convierte en un estado global 
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

    const logout = ()=>{
        setUser(null);
        setisAllowed(false);
    };
    

    return(
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}