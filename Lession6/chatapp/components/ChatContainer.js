import ActiveConversationTitle from "./ActiveConversationTitle.js";
import ChatInput from "./ChatInput.js";
import MessageList from "./MessageList.js";
class ChatContainer {
  _activeConversation;
  constructor() {
    this.$chatContainer = document.createElement("div");
    // this.$chatContainer.textContent = "Chat Container";
    this.$chatContainer.setAttribute(
      "class",
      "flex flex-col w-3/4 h-screen border px-8 py-4"
    );

    this.$activeConversationTitle = new ActiveConversationTitle();
    this.$chatInput = new ChatInput();
    this.$messageList = new MessageList();
  }

  // Khi bấm vào conversation sẽ thay đổi title conversation ở trên

  // Nhận dữ liệu đc gửi từ conversationItem
  setActiveConversation(activeConversation) {
    this._activeConversation = activeConversation;
    this.$activeConversationTitle.setConversation(activeConversation);
    this.$messageList.setConversation(activeConversation);
  }

  render(mainContainer) {
    this.$chatContainer.appendChild(this.$activeConversationTitle.render());
    this.$chatContainer.appendChild(this.$messageList.render());
    this.$chatContainer.appendChild(this.$chatInput.render());
    mainContainer.appendChild(this.$chatContainer);
  }
}

export default ChatContainer;
