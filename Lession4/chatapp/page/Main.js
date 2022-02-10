import {signOut} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'
import {auth} from "../constants/commons.js";

class Main {
    constructor(){
        this.$mainContainer = document.createElement("div");

        this.$welcome = document.createElement("h1");
        this.$welcome.innerText = "Welcome to Chat";

        this.$signOutButton = document.createElement("button");
        this.$signOutButton.setAttribute("class","bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg")
        this.$signOutButton.innerText = "Sign Out";
        this.$signOutButton.addEventListener("click", this.signOut);
    }

    // Hàm để đăng xuất 
    signOut = () =>{
        signOut(auth)
        .then(response => {
            if(response){
                alert("You have been signed out");
            }
        })
        .catch((error) => {
            alert("Error signing out");
        })
    }

    render(contaier){
        this.$mainContainer.appendChild(this.$welcome);
        this.$mainContainer.appendChild(this.$signOutButton);
        contaier.appendChild(this.$mainContainer);
    }
}

export default Main;


// Một vấn đề xảy ra là khi đăng nhập thành công rồi ta
// reset trang lại thì nó lại quay về trang đăng ký 