import { mockMessage } from "../assets/mockData.js";
import MessageItem from "./MessageItem.js";
import {
  collection,
  doc,
  getFirestore,
  getDoc,
  setDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import { messagesRef } from "../constants/commons.js";
class MessageList {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "flex flex-1 flex-col p-4 overflow-x-auto"
    );
    // this.$container.textContent = "MessageList";

    // this.renderMessages();
  }

  renderMessages(currentConversationId) {
    // mockMessage.forEach((msg) => {
    //   const messageItem = new MessageItem(msg);
    //   this.$container.appendChild(messageItem.render());
    // });
    // const messageRef = collection(db, "messages");
    // getDocs(messageRef).then((docs) => {
    //   docs.forEach((doc) => {
    //     const msg = doc.data();
    //     const messageItem = new MessageItem(msg);
    //     this.$container.appendChild(messageItem.render());
    //   });
    // });

    const q = query(
      messagesRef,
      where("conversationId", "==", currentConversationId)
    );

    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // console.log("data", change.doc.data);
          messages.push(change.doc.data);
          // const msg = change.doc.data();
        }
      });
      messages.sort((a, b) => a.createdAt - b.createdAt);
      messages.forEach;
    });

    getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        const msg = doc.data();
        const messageItem = new MessageItem(msg);
        this.$container.appendChild(messageItem.render());
      });
    });
  }

  setConversation(conversation) {
    // this.$container.textContent = conversation.conversationName;
    this.$container.innerHTML = "";
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
