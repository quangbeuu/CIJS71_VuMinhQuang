class ActiveConversationTitle {
  constructor() {
    this.$container = document.createElement("div");
    // this.$container.textContent = "Active Conversation Title";
    this.$container.setAttribute(
      "class",
      "h-18 flex justify-between p-4 text-xl font-bold border-b"
    );
    this.$title = document.createElement("h4");
    this.$title.textContent = "No active conversation";

    // lúc đầu ra lỗi undefined là do ta chưa click vào
    // conversation (khi click thì mới có conversationName)

    // if (conversation) {
    //   this.$title.textContent = conversation.conversationName;
    // } else {
    //   this.$title.textContent = "No active conversation";
    // }

    // => Ta ko thể lm như trên vì constructor chỉ chạy đúng
    // 1 lần duy nhất

    // => Ko thể update lại giá trị của this.$title.textContent

    // => Ta phải có phương thức setConversation
    // (đc gọi khi có giá trị mới)
    this.$member = document.createElement("h4");
    this.$member.textContent = "0 members";
  }

  setConversation(conversation) {
    this.$title.textContent = conversation.conversationName;
    this.$member.textContent = conversation.members.length + " members";
  }

  render() {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$member);
    return this.$container;
  }
}

export default ActiveConversationTitle;
