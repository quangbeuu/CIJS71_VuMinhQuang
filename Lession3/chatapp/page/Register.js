import InputButton from "../components/inputButton.js";
import InputGroup from "../components/inputGroup.js";

class Register {
    constructor(){
        this.$registerContainer = document.createElement("form");
        this.$registerContainer.setAttribute("class", "w-1/3 bg-blue-400 mx-auto mt-12 p-8 rounded-2xl");
        this.$registerContainer.addEventListener("submit",this.onSubmit);

        this.$displayName = new InputGroup("Display name","text","Enter your name");
        this.$email = new InputGroup("Email","email","Enter your email");
        this.$password = new InputGroup("Password","password","Enter your password");
        this.$confirmPassword = new InputGroup("Confirm password","password","Confirm your password");
    
        this.$registerBtn = new InputButton("Register","submit");
    }

    render(){
        this.$registerContainer.appendChild(this.$displayName.render())
        this.$registerContainer.appendChild(this.$email.render())
        this.$registerContainer.appendChild(this.$password.render())
        this.$registerContainer.appendChild(this.$confirmPassword.render())
        this.$registerContainer.appendChild(this.$registerBtn.render())
    
        return this.$registerContainer;
    }
}

export default Register;