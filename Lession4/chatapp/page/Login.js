import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'

import InputButton from "../components/inputButton.js";
import InputGroup from "../components/inputGroup.js";
import Register from "./Register.js";
import Main from './Main.js';
import app from "../index.js";
import {auth} from "../constants/commons.js";
// const auth = getAuth();

class Login{
    constructor(){
        this.$loginContainer = document.createElement("form");
        this.$loginContainer.setAttribute("class", "w-1/3 bg-blue-400 mx-auto mt-12 p-8 rounded-2xl");
        this.$loginContainer.addEventListener("submit",this.onSubmit);

        this.$email = new InputGroup("Email", "email","Enter your email");
        this.$password = new InputGroup("Password", "password","Enter your password");

        this.$loginBtn = new InputButton("Login","submit");
    
        this.$goToRegister = document.createElement("span");
        this.$goToRegister.setAttribute("class","text-white ml-4 cursor-pointer")
        this.$goToRegister.innerText = "Don't have an account?"
        this.$goToRegister.addEventListener("click", this.goToRegisterPage)      
    }

    goToRegisterPage = () =>{
        const registerScreen = new Register();
        app.setActiveScreen(registerScreen)
    }

    onSubmit = async (e) => {
        e.preventDefault();
        try{
            const email = this.$email.getValue();
            const password = this.$password.getValue();
            if(email === ""){
                this.$email.$error.innerText = "Email cannot be blank"
            }
            if(password === ""){
                this.$password.$error.innerText = "Password cannot be blank"
            }
            if(email && password){
                // đăng nhập với email và password 
                const response = await signInWithEmailAndPassword(
                    auth, 
                    email,
                    password
                );
                const user = response.user;
                if(user){
                    alert("Login Successful")
                }
            }
        }
        catch(error){
            alert(error.message)
        }   
    }

    render(container){
        this.$loginContainer.appendChild(this.$email.render());
        // render() này là ở class InputGroup trong file components
        
        this.$loginContainer.appendChild(this.$password.render());
        this.$loginContainer.appendChild(this.$loginBtn.render());
        this.$loginContainer.appendChild(this.$goToRegister)
        container.appendChild(this.$loginContainer)
        // return this.$loginContainer;
    }
    
}



// file Login để index.js dùng thì

// export let isLogin = true;

export default Login;


// Trong 1 file thì chỉ export default 1 lần 



// BTVN làm trang register

// display name
// email 
// password
// confirm password