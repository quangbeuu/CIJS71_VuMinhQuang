import { auth } from "../constants/commons.js";
import { formatTime } from "../utils/helper.js";

class MessageItem {
  constructor(msg) {
    this._myMessage = msg.senderId === auth.currentUser.uid;
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      `mb-8 ${this._myMessage ? "mr-0 ml-auto" : ""}`
    );
    // Nếu là tin nhắn của mk thì sang phải, của ng khác thì
    // sang trái
    this.$msg = document.createElement("p");
    this.$msg.textContent = msg.content;
    this.$msg.setAttribute(
      "class",
      `${
        this._myMessage ? "bg-gray-400" : "bg-indigo-500"
      } rounded-full px-4 py-2 w-max text-white`
    );

    // - Cách của quang
    // if (msg.senderId === "anonymous") {
    //   this.$container.setAttribute("class", "mb-8 self-end");
    //   this.$msg.setAttribute(
    //     "class",
    //     "bg-indigo-500 rounded-full px-4 py-2 mb-2 w-max text-white"
    //   );
    // } else {
    //   this.$msg.setAttribute(
    //     "class",
    //     "bg-zinc-400 rounded-full px-4 py-2 mb-2 w-max text-white"
    //   );
    // }

    this.$time = document.createElement("p");
    // this.$time.textContent = msg.createdAt;
    // this.$time.textContent = "8:20 PM";

    //format thời gian thành dạng "giờ phút giây"
    this.$time.textContent = formatTime(msg.createdAt);
    this.$time.setAttribute("class", "text-sm text-gray-500");
  }

  render() {
    this.$container.appendChild(this.$msg);
    this.$container.appendChild(this.$time);
    return this.$container;
  }
}

export default MessageItem;
