import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import InputButton from "../components/inputButton.js";
import InputGroup from "../components/inputGroup.js";

import Login from "../page/Login.js";
import app from "../index.js";

import { auth } from "../constants/commons.js";
// const auth = getAuth();

class Register {
  constructor() {
    this.$registerContainer = document.createElement("form");
    // Tạo thẻ form do sự kiện submit sinh ra là cho thẻ form
    this.$registerContainer.setAttribute(
      "class",
      "w-1/3 bg-blue-400 mx-auto mt-12 p-8 rounded-2xl"
    );
    this.$registerContainer.addEventListener("submit", this.onSubmit);

    this.$displayName = new InputGroup(
      "Display name",
      "text",
      "Enter your name"
    );
    this.$email = new InputGroup("Email", "email", "Enter your email");
    this.$password = new InputGroup(
      "Password",
      "password",
      "Enter your password"
    );
    this.$confirmPassword = new InputGroup(
      "Confirm password",
      "password",
      "Confirm your password"
    );

    this.$registerBtn = new InputButton("Register", "submit");

    this.$goToLogin = document.createElement("span");
    this.$goToLogin.setAttribute("class", "text-white ml-4 cursor-pointer");
    this.$goToLogin.innerText = "Already have an account?";
    this.$goToLogin.addEventListener("click", this.goToLoginPage);
  }

  // onSubmit = (event) =>{
  //     event.preventDefault();
  //     // const newUser = {
  //         // displayName: this.$displayName.getValue(),
  //         // email: this.$email.getValue(),
  //         // password: this.$password.getValue(),
  //         // consfirmPassword: this.$confirmPassword.getValue()

  //     // }
  //     const email = this.$email.getValue();
  //     const password = this.$password.getValue();
  //     createUserWithEmailAndPassword(auth, email, password)
  //     .then((res)=>{
  //         const user = response.user;
  //     })
  //     .catch((error)=>{
  //         console.log("error", error);
  //     })

  // }

  goToLoginPage = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen);
  };

  // Khi bấm Submit xong nó sẽ lấy dữ liệu trong các thẻ
  // input
  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const displayName = this.$displayName.getValue();
      const email = this.$email.getValue();
      // Hàm getValue ở inputGroup
      const password = this.$password.getValue();
      const consfirmPassword = this.$confirmPassword.getValue();

      if (email.length === 0) {
        this.$email.setErrorMsg("Email is required");
      } else {
        this.$email.setErrorMsg("");
      }
      if (displayName.length === 0) {
        this.$displayName.setErrorMsg("Display name is required");
      } else {
        this.$displayName.setErrorMsg("");
      }
      if (password.length === 0) {
        this.$password.setErrorMsg("Password is required");
      } else {
        this.$password.setErrorMsg("");
      }
      if (password === consfirmPassword) {
        // Tạo người dùng mới
        // Hàm createUserWithEmailAndPassword là 1 hàm bất đồng
        // bộ vì cần tốn tg để tạo ng dùng

        // => dùng promise hoặc async await
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = response.user;
        console.log(user);
        if (user) {
          // window.location.href = "./login.html";

          // => Chuyển sang màn hình Login
          const loginScreen = new Login();
          app.setActiveScreen(loginScreen);
        }
      } else {
        this.$confirmPassword.$error.innerText = "Passwords do not match";
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  render(container) {
    this.$registerContainer.appendChild(this.$displayName.render());
    this.$registerContainer.appendChild(this.$email.render());
    this.$registerContainer.appendChild(this.$password.render());
    this.$registerContainer.appendChild(this.$confirmPassword.render());
    this.$registerContainer.appendChild(this.$registerBtn.render());
    this.$registerContainer.appendChild(this.$goToLogin);

    container.appendChild(this.$registerContainer);
  }
}

export default Register;
