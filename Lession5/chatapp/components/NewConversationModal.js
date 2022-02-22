import InputGroup from "./inputGroup.js";
import { auth, db } from "../constants/commons.js";

import {
  collection,
  doc,
  setDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

class NewConversationModal {
  constructor() {
    this.$container = document.createElement("form");
    // this.$container.textContent = "New Conversation Modal";
    this.$container.setAttribute(
      "class",
      "hidden new-conversation-modal bg-blue-400 px-8 py-4 rounded-lg shadow-xl"
    );
    this.$container.addEventListener("submit", this.onSubmit);

    this.$conversationName = new InputGroup(
      "Conversation Name",
      "text",
      "Enter your conversation name"
    );
    this.$email = new InputGroup("Email", "text", "Enter email");
    this.$submit = document.createElement("button");
    this.$submit.textContent = "Create";
    this.$submit.type = "submit";
    this.$submit.setAttribute(
      "class",
      "px-8 py-2 bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold rounded-lg"
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const email = this.$email.getValue();
    const conversationName = this.$conversationName.getValue();
    // Từ thằng auth ta có thể lấy đc email của chính mình
    // console.log("Submit", {
    //   email,
    //   conversationName,
    //   currentUserEmail: auth.currentUser.email,
    // });

    const newConversationDocument = {
      members: [email, auth.currentUser.email],
      // email của mk và ng inb vs mk,
      conversationName,
      createdAt: new Date().valueOf(),
    };

    // - Dùng setDoc
    // const collectionRef = doc(db, "conversations ", "11111111111");
    // setDoc(collectionRef, newConversationDocument);
    // this.$container.classList.add("hidden");

    // - Dùng addDoc
    const conversationRef = collection(db, "conversations ");
    addDoc(conversationRef, newConversationDocument);
  };

  render() {
    this.$container.appendChild(this.$conversationName.render());
    this.$container.appendChild(this.$email.render());
    this.$container.appendChild(this.$submit);
    return this.$container;
  }
}

export default NewConversationModal;
