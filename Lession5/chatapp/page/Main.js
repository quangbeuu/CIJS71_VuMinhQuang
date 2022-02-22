import ConversationList from "../components/ConversationList.js";
import ChatContainer from "../components/ChatContainer.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex");
    this.$conversationList = new ConversationList();
    this.$chatContainer = new ChatContainer();

    // this.$welcome = document.createElement("h1");
    // this.$welcome.innerText = "Welcome to Chat";

    // this.$signOutButton = document.createElement("button");
    // this.$signOutButton.setAttribute(
    //   "class",
    //   "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    // );
    // this.$signOutButton.innerText = "Sign Out";
    // this.$signOutButton.addEventListener("click", this.signOut);
  }

  // Hàm để đăng xuất
  signOut = () => {
    signOut(auth)
      .then((response) => {
        if (response) {
          alert("You have been signed out");
        }
      })
      .catch((error) => {
        alert("Error signing out");
      });
  };

  render(contaier) {
    // this.$mainContainer.appendChild(this.$welcome);
    // this.$mainContainer.appendChild(this.$signOutButton);
    this.$conversationList.render(this.$mainContainer);
    this.$chatContainer.render(this.$mainContainer);
    contaier.appendChild(this.$mainContainer);
  }
}

export default Main;

// Một vấn đề xảy ra là khi đăng nhập thành công rồi ta
// reset trang lại thì nó lại quay về trang đăng ký
