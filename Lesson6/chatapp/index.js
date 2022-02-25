// file index muốn sử dụng JS từ file Login 

// import {isLogin} from "./page/Login.js";

import {onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'
import Login from "./page/Login.js";
import Register from "./page/Register.js"
import Main from './page/Main.js';
import {auth} from "./constants/commons.js";
// const login = new Login();
// const register = new Register();

// const appEl = document.getElementById("app");

// // appEl.appendChild(login.render());
// appEl.appendChild(register.render())

// class App nhiệm vụ nhận vào những màn hình sẽ đưa lên creen

class App{
    _activeScreen;
    constructor(view){
        this.view = view;
        // Khi app đc tạo ra thì ktra luôn xem đã đăng 
        // nhập chưa

        this.onAuthenticationListener();
    }

    // Hàm kiểm tra xem cta đã đăng nhập hay chưa
    onAuthenticationListener(){
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const mainScreen = new Main();
                this.setActiveScreen(mainScreen)
            }
            else{
                const loginScreen = new Login();
                this.setActiveScreen(loginScreen)
            }
        })
    }

    // set cái sẽ hiện lên màn hình 
    setActiveScreen(screen){
        // => screen là 1 cái component ta sẽ truyền vào
        // Xóa màn hình hiện tại
        // (Ktra xem đag có màn hình nào k,có thì xóa nó đi)
        if(this._activeScreen){
            this.view.innerHTML = "";
        }
        this._activeScreen = screen;
        // thay đổi màn hình 
        screen.render(this.view);
    }
}

const view = document.getElementById("app");
const app = new App(view);


// const loginScreen = new Login();
// const registerScreen = new Register();

// app.setActiveScreen(loginScreen)
// app.setActiveScreen(loginScreen)

export default app;


// Muốn từ màn hình register chuyển sang màn hình Login 

// => Thì thằng register phải lấy phương thức setActiveScreen
// của thằng app 

// => phải export thằng app 