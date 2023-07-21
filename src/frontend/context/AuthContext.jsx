import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginService, signupService } from "../services/authService";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
    const [token,setToken] = useState(localStorageToken?.token || "");
    const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

    const signupHandler = async ({firstName, lastName, email, password }) => {
        try {
            const response = await signupService(firstName, lastName, email, password);
            const {
                status,
                data : {createdUser,encodedToken}
            } = response;
            if(status === 200 || status === 201) {
                localStorage.setItem("loginDetails", JSON.stringify({user: createdUser, token: encodedToken}));
                setToken(encodedToken);
                setCurrentUser(createdUser);
                toast.success(`Hello!, ${createdUser.firstName}!`,{
                    icon : "👋"
                });
                navigate("/",{replace:true})
            }
        }
        catch(error) {
            console.error(error);
            toast.error("Oops! Error occured in Signing you up.")
        }
    };

const loginHandler = async ({email, password}) => {
    try {
        const response = await loginService(email, password);
        const {
            status,
            data : {foundUser, encodedToken}
        } = response;
        if(status === 200 || status === 201) {
            localStorage.setItem("loginDetails", JSON.stringify({user: foundUser, token: encodedToken}));
            setToken(encodedToken);
            setCurrentUser(foundUser);
            toast.success(`Welcome back, ${foundUser.firstName}!`,{
                icon : "👋"
            })
            navigate(location?.state?.from?.pathname || "/", { replace: true })
        }
    }
    catch(error) {
        console.error(error);
        toast.error("Oops! User does not exist. Sign up to create an account.")
    }
    };

    const logoutHandler = () => {
        localStorage.removeItem("loginDetails");
        setToken(null);
        setCurrentUser(null);
        toast.success("You have been logged out successfully!")
    };

    return (
        <AuthContext.Provider 
            value={{signupHandler,loginHandler,logoutHandler,token,currentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)