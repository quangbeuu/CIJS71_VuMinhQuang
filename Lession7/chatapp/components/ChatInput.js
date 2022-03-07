// chatInput là phần nhập text để gửi chat
import { auth, db, messageRef } from "../constants/commons.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

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

  // Dùng promise
  // onSubmit = (e) => {
  //   e.preventDefault();
  //   // const content = this.$input.value;

  //   // => Lấy email của ng chat
  //   // console.log(auth.currentUser.email);
  //   // Tạo dữ liệu lưu lên firebase
  //   const newMsg = {
  //     content: this.$input.value,
  //     createdAt: new Date().valueOf(),
  //     senderId: auth.currentUser.uid,
  //     // Lấy uid của ng chat
  //     conversationId: this._activeConversation.conversationId,
  //     // => conversationId giúp cho ta bk ta đg chat ở
  //     // đoạn chat nào
  //   };
  //   // console.log("New message", newMsg);
  //   // => Ở đây có 1 lỗi là khi t k bấm vào 1 conversation
  //   // thì khi gõ chat vào input và ấn enter nó sẽ
  //   // k tạo ra newMsg do nó k có convertionId

  //   // Thêm newMsg lên collection messages trên firebase
  //   const messageRef = collection(db, "messages");
  //   addDoc(messageRef, newMsg)
  //     .then((res) => {
  //       console.log("res", res);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // };

  onSubmit = async (e) => {
    try {
      e.preventDefault();
      // tránh spam
      const msgValue = this.$input.value;
      if (msgValue.trim().length !== 0) {
        const newMsg = {
          content: msgValue,
          createdAt: new Date().valueOf(),
          senderId: auth.currentUser.uid,
          conversationId: this._activeConversation.conversationId,
        };
        addDoc(messageRef, newMsg);
        // const messageRef = collection(db, "messages");
        // const response = await addDoc(messageRef, newMsg);
        // => response là dữ liệu trong collection messages
        // => Nhưng ở đây ta k dùng đến nên chỉ gọi hàm addDoc
        // để add dữ liệu vào
        this.$input.value = "";
        // msgValue = "";
        // => Đoạn này ko dùng đc msgValue vì khi ta gán lại msgValue thì nó thay đổi giá trị
        // const (mà const ko thay đổi dc giá trị)
      }
    } catch (err) {
      alert(err.message);
    }
  };

  setConversation(conversation) {
    console.log("conversation", conversation);
    this._activeConversation = conversation;
  }

  render() {
    this.$container.appendChild(this.$input);
    return this.$container;
  }
}

export default ChatInput;
