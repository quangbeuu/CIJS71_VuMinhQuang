import ConversationList from "../components/ConversationList.js";
import ChatContainer from "../components/ChatContainer.js";

class Main {
  _activeConversation;
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex");

    // this.$conversationList = new ConversationList(this.setActiveConversation);
    // => Nếu truyền thẳng ntn thì khi thằng Main chạy
    // => Nó sẽ chạy constructor trc
    // => Đến this.$conversationList thì nó sẽ chuyền cái this.setActiveConversation vào
    // hàm setActiveConversation ta có sử dụng $chatContainer
    // (nhưng ở dưới $chatContainer mới được tạo ra nên lúc
    // này chưa có => ta console.log sẽ ra undefined)

    // => Khắc phục: truyền vào callback rồi mới chuyền
    // setActiveConversation
    // (callback chỉ hoạt động khi dc gọi
    // => dc gọi khi click vào ConversationItem)

    // Truyền function từ Main xuống conversationList
    this.$conversationList = new ConversationList((conversation) => {
      this.setActiveConversation(conversation);
    });
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

  setActiveConversation(conversation) {
    // this._activeConversation = conversation;

    // Truyền dữ liệu cho Chatcontainer để update dữ liệu
    this.$chatContainer.setActiveConversation(conversation);
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
