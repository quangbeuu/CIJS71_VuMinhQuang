// file index muốn sử dụng JS từ file Login 

// import {isLogin} from "./page/Login.js";
import Login from "./page/Login.js";
import Register from "./page/Register.js"

const login = new Login();
const register = new Register();

const appEl = document.getElementById("app");

appEl.appendChild(login.render());
appEl.appendChild(register.render())

