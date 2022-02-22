// trong ConversationList sẽ chứa nhiều đoạn hội thoại
// là các ConversationItem

class ConversationItem {
  // conversationInfo là 1 object chứa các thông tin
  // members, conversationName, createdAt
  constructor(conversationInfo) {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "h-18 mb-4 p-4 text-xl font-bold border rounded-lg hover:bg-gray-200 cursor-pointer"
    );

    this.$conversationName = document.createElement("h4");
    this.$conversationName.textContent = conversationInfo.conversationName;
  }

  render() {
    this.$container.appendChild(this.$conversationName);
    return this.$container;
    // trả về html
  }
}

export default ConversationItem;
