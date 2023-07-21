import axios from "axios";

const signupService = async (firstName,lastName,email,password) => 
    await axios.post(
        "/api/auth/signup",
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
    );

const loginService = async (email, password) => 
    await axios.post(
        "/api/auth/login",
        {
            email: email,
            password: password,
        }
    );

export {loginService,signupService}