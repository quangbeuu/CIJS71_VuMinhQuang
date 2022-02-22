class ActiveConversationTitle {
  constructor() {
    this.$container = document.createElement("div");
    // this.$container.textContent = "Active Conversation Title";
    this.$container.setAttribute(
      "class",
      "h-18 flex justify-between p-4 text-xl font-bold border-b"
    );
    this.$title = document.createElement("h4");
    this.$title.textContent = "Active Conversation";

    this.$member = document.createElement("h4");
    this.$member.textContent = "0 members";
  }

  render() {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$member);
    return this.$container;
  }
}

export default ActiveConversationTitle;
