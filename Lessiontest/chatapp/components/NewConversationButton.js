// Nút New Conversation button nó phải xử lý nhiều sự kiên nên
// cũng nên tách ra thành 1 components

class NewConversationButton {
  // Cách truyền giá trị từ components này sang component khác
  constructor(newConversationModalContainer) {
    // Biến lưu giá trị thẻ div của conversation modal
    this._newConversationModalContainer = newConversationModalContainer;
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "flex w-full bg-yellow-400 px-8 py-2 rounded-lg mb-4 hover:bg-yellow-500 cursor-pointer"
    );
    // click tạo modal mới
    this.$container.addEventListener("click", this.visibleModal);

    // nút tạo Conversation mới
    this.$newConversation = document.createElement("button");
    this.$newConversation.textContent = "New Conversation";
    this.$newConversation.setAttribute("class", "ml-4 text-gray-700 font-bold");

    this.$pencilSVG = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>`;
  }

  visibleModal = () => {
    this._newConversationModalContainer.classList.toggle("hidden");
  };

  render() {
    this.$container.insertAdjacentHTML("afterbegin", this.$pencilSVG);
    this.$container.appendChild(this.$newConversation);
    return this.$container;
  }
}

export default NewConversationButton;
