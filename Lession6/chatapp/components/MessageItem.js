class MessageItem {
  constructor(msg) {
    this.$container = document.createElement("div");
    this.$msg = document.createElement("p");
    this.$msg.textContent = msg.content;

    if (msg.senderId === "anonymous") {
      this.$container.setAttribute("class", "mb-8 self-end");
      this.$msg.setAttribute(
        "class",
        "bg-indigo-500 rounded-full px-4 py-2 mb-2 w-max text-white"
      );
    } else {
      this.$msg.setAttribute(
        "class",
        "bg-zinc-400 rounded-full px-4 py-2 mb-2 w-max text-white"
      );
    }

    this.$time = document.createElement("p");
    // this.$time.textContent = msg.createdAt;
    this.$time.textContent = "8:20 PM";
    this.$time.setAttribute("class", "text-sm text-gray-500");
  }

  render() {
    this.$container.appendChild(this.$msg);
    this.$container.appendChild(this.$time);
    return this.$container;
  }
}

export default MessageItem;
