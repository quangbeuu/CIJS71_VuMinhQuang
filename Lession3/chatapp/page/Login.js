import InputButton from "../components/inputButton.js";
import InputGroup from "../components/inputGroup.js";

class Login{
    constructor(){
        this.$loginContainer = document.createElement("form");
        this.$loginContainer.setAttribute("class", "w-1/3 bg-blue-400 mx-auto mt-12 p-8 rounded-2xl");
        this.$loginContainer.addEventListener("submit",this.onSubmit);

        this.$email = new InputGroup("Email", "email","Enter your email");
        this.$password = new InputGroup("Password", "password","Enter your password");

        // this.$emailLabel = document.createElement("label");
        // this.$emailLabel.innerText = "Email";
        // this.$emailInput = document.createElement("input");
        // this.$emailInput.type = "text";
        // this.$emailInput.placeholder = "Enter your email";
        
        // this.$pswLabel = document.createElement("label");
        // this.$pswLabel.innerText = "Password";
        // this.$pswInput = document.createElement("input");
        // this.$pswInput.type = "password";
        // this.$pswInput.placeholder = "Enter your password";
    
        // this.$loginBtn = document.createElement("button");
        // this.$loginBtn.setAttribute("class","bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg")
        // this.$loginBtn.innerText = "Login"; 
        // this.$loginBtn.type = "submit";

        this.$loginBtn = new InputButton("Login","submit");
    }

    onSubmit = (e) => {
        e.preventDefault();
        
    }

    render(){
        // this.$loginContainer.appendChild(this.$emailLabel)
        // this.$loginContainer.appendChild(this.$emailInput)

        // this.$loginContainer.appendChild(this.$pswLabel)
        // this.$loginContainer.appendChild(this.$pswInput)

        this.$loginContainer.appendChild(this.$email.render());
        this.$loginContainer.appendChild(this.$password.render());
        this.$loginContainer.appendChild(this.$loginBtn.render());

        return this.$loginContainer;
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