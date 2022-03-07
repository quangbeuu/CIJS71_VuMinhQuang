// chatInput là phần nhập text để gửi chat

import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import { auth, db } from "../constants/commons.js";

class ChatInput {
  _activeConversation;
  constructor() {
    this.$container = document.createElement("form");
    // this.$container.textContent = "Chat Input";
    this.$container.addEventListener("submit", this.onSubmit);

    // => Khi nhập tin nhắn xong ấn enter tức đã gửi submit
    // dữ liệu lên form để nó lấy dữ liệu
    // => để container là thẻ form

    // (ta có thể tạo thêm 1 cái buttom rồi add sự kiện
    // click để khi click vào thì nó gửi)

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Add your message here";
    this.$input.setAttribute(
      "class",
      "w-full border-indigo-50 px-4 py-2 rounded-full bg-indigo-50 outline-none"
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newMsg = {
      content: this.$input.value,
      createdAt: new Date().valueOf(),
      senderId: auth.currentUser.uid,
      conversationId: this._activeConversation.conversationId,
    };

    console.log(newMsg);
    const messageRef = collection(db, "messages");
    addDoc(messageRef, newMsg)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  setConversation(conversation) {
    this._activeConversation = conversation;
  }

  render() {
    this.$container.appendChild(this.$input);
    return this.$container;
  }
}

export default ChatInput;
