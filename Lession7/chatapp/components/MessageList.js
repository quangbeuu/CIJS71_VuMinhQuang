import { mockMessage } from "../assets/mockData.js";
import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import MessageItem from "./MessageItem.js";
import { db, messageRef } from "../constants/commons.js";
class MessageList {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "flex flex-1 flex-col p-4 overflow-x-auto"
    );
    // this.$container.textContent = "MessageList";

    // this.renderMessages();
    // => Gọi renderMessages này ở setConversation vì khi bấm vào
    // 1 conversation thì nó mới chạy để render ra tin nhắn
    // (Tức lúc vào sẽ ko hiện tin nhắn ta phải bấm vào
    // 1 conversation thì mới hiện ra tin nhắn)
  }

  renderMessages(currentConversationId) {
    // mockMessage.forEach((msg) => {
    //   const messageItem = new MessageItem(msg);
    //   this.$container.appendChild(messageItem.render());
    // });
    // hiện tin nhắn lên giao diện
    // const messageRef = collection(db, "messages");
    const q = query(
      messageRef,
      where("conversationId", "==", currentConversationId)
    );
    // Tìm những messages có conversationId bằng chính với
    // conversationId mà mk click vào
    // getDocs(q).then((docs) => {
    //   docs.forEach((doc) => {
    //     // console.log(doc.data());
    //     const msg = doc.data();
    //     const messageItem = new MessageItem(msg);
    //     this.$container.appendChild(messageItem.render());
    //   });
    // });

    // Làm tin nhắn realtime
    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          messages.push(change.doc.data());
        }
      });
      // Sắp xếp thời gian tin nhắn nào xuất mới nhất sẽ hiển
      // thị sau cùng
      messages.sort((a, b) => a.createdAt - b.createdAt);
      messages.forEach((msg) => {
        const messageItem = new MessageItem(msg);
        this.$container.appendChild(messageItem.render());
      });
    });
  }

  setConversation(conversation) {
    // this.$container.textContent = conversation.conversationName;
    this.$container.innerHTML = "";
    // => Có một vấn để là ta chat ở conversation này
    // nhưng đoạn chat này hiện lên cả conversation khác
    // => trc khi render ta phải xóa hết nội dung đoạn chat
    this.renderMessages(conversation.conversationId);
  }

  render() {
    return this.$container;
  }
}

export default MessageList;

// BTVN

// Những tin nhắn có id là anonymous nằm bên phải
// còn quang thì nằm bên trái

// - Khi có quá nhiều message nó sẽ scroll
