// Màn hình main sẽ chứa 2 phần là

// + ConversationList: phần chứa tên những người bạn chat vs mk
// + ChatContainer: phần tin nhắn vs 1 ng cụ thể

import { signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { auth, db } from "../constants/commons.js";
import ConversationItem from "../components/ConversationItem.js";
import NewConversationButton from "./NewConversationButton.js";
import NewConversationModal from "./NewConversationModal.js";
import { conversations as mockConversation } from "../assets/mockData.js";
// as để đổi tên

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
// const db = getFirestore();

class ConversationList {
  constructor(setActiveConversation) {
    // Biến function của cha thành function của con
    this._setActiveConversation = setActiveConversation;
    this.$container = document.createElement("div");
    // this.$container.textContent = "Conversation List";
    this.$container.setAttribute(
      "class",
      "w-1/4 h-screen px-4 pt-4 overflow-y-scroll"
    );

    this.$newConversationModal = new NewConversationModal();
    this.$newConversationButton = new NewConversationButton(
      this.$newConversationModal.$container
    );
    // this.temp = new ConversationItem();

    this.$signOutButton = document.createElement("button");
    this.$signOutButton.textContent = "Sign Out";
    this.$signOutButton.setAttribute(
      "class",
      "w-full px-4 py-2 font-bold text-gray-700 rounded-lg bg-yellow-400 hover:bg-yellow-500 cursor-pointer mb-4"
    );
    this.$signOutButton.addEventListener("click", this.signOut);

    this.createConversationFromCollection();
  }

  signOut = () => {
    signOut(auth)
      .then((response) => {
        if (response) {
          alert("Signed out");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Vì mỗi hàm chỉ thực hiện 1 công vc nên
  // ta tạo thêm 1 hàm để thực hiện vòng lặp
  async createConversationFromCollection() {
    // mockConversation sau này ta sẽ lấy dữ liệu từ firestore
    // lên chứ ko dùng file js nữa
    //--------------------------------------------------
    // => lấy 1 data từ firebase
    // const conversationRef = doc(db, "conversations ", "oMHbrpV7La9F6zZY0gVJ");
    // const data = await getDoc(conversationRef);
    // console.log(data.data());
    // -------------------------------------------------
    // => Lấy tất cả dữ liệu từ firebase
    // const conversationsRef = collection(db, "conversations ");
    // const data = await getDocs(conversationsRef);
    // data.forEach((document) => {
    //   // console.log(document.data());
    //   const conversationItem = new ConversationItem(document.data());
    //   this.$container.appendChild(conversationItem.render());
    // });
    // ------------------------------------------------
    // => Lấy data có query
    // const conversationsRef = collection(db, "conversations ");

    // const q = query(conversationsRef, where("createdAt", "==", 321));

    // const data = await getDocs(q);
    // data.forEach((document) => {
    //   console.log(document.data());
    //   const conversationItem = new ConversationItem(document.data());
    //   this.$container.appendChild(conversationItem.render());
    // });
    // ------------------------------------------------
    // => Dùng mockConversation data (data tạo từ js)
    // mockConversation.forEach((conversation) => {
    //   const conversationItem = new ConversationItem(conversation);
    //   this.$container.appendChild(conversationItem.render());
    // });

    // -----------------------------------------------
    // => Listen for realtime (dữ liệu realtime)

    // 1. Update 1 doc
    // const documentRef = doc(db, "conversations ", "CbcYIPUMfXBQRqd6D1ge");
    // onSnapshot(documentRef, (doc) => {
    //   console.log(doc.data());
    // });

    // ---------------------------------------------
    // 2. Update all doc

    // - Lưu ý nếu ta viết sai tên collection (ở đây là
    // conversations) nó sẽ tự động tạo thêm collection mới

    // => Khi đó bài của ta sẽ bị sai
    const conversationRef = collection(db, "conversations");
    const q = query(
      conversationRef,
      where("members", "array-contains", auth.currentUser.email)
      // lọc theo trường members vì cần tìm email của bản thân
      // array-contains: tìm xem trong array có chứa 1 giá trị j đó
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          // console.log(change.doc.data());
          // console.log(change.doc.id);
          // const conversationDoc = change.doc.data();
          const conversationDoc = {
            ...change.doc.data(),
            conversationId: change.doc.id,
          };
          // mỗi dữ liệu sẽ bằng conversationDoc

          // Chuyền fucntion từ conversationList xuống
          // conversationItem
          const conversationItem = new ConversationItem(
            conversationDoc,
            this._setActiveConversation
          );
          this.$container.appendChild(conversationItem.render());
        }
      });
    });
  }

  render(mainContainer) {
    this.$container.appendChild(this.$newConversationButton.render());
    this.$container.appendChild(this.$newConversationModal.render());
    // Khi click vào newConversation ra modal
    // this.$newConversationModal.$container;

    // Tạo nhiều conversation
    // for (let i = 0; i < 20; i++) {
    //   let temp = new ConversationItem(i);
    //   this.$container.appendChild(temp.render());
    // }

    // for (let i = 0; i < mockConversation.length; i++) {
    //   const conversationItem = new ConversationItem(mockConversation[i]);
    //   this.$container.appendChild(conversationItem.render());
    // }

    // Mỗi hàm thực hiện 1 công vc nên => tạo thêm 1 hàm mới
    // createConversationFromCollection

    // mockConversation.forEach((conversation) => {
    //   const conversationItem = new ConversationItem(conversation);
    //   this.$container.appendChild(conversationItem.render());
    // });

    this.$container.appendChild(this.$signOutButton);
    mainContainer.appendChild(this.$container);
  }
}

export default ConversationList;
