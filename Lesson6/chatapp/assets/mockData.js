export const conversations = [
  //Conversation1
  {
    members: ["quangzu@gmail.com", "namnguyen@gmail.com"],
    conversationName: "Nam Fullstack",
    createdAt: "2020-05-05",
    // thằng createdAt ta sẽ sử dụng Date trong JS
    // => nó sẽ biến ngày này thành 1 dãy số
  },
  //Conversation2
  {
    members: ["duongdat@gmail.com", "minhduc@gmail.com"],
    conversationName: "Duc Fullstack",
    createdAt: "2020-05-09",
  },
];

// 1 tin nhắn của cta thường sẽ có các field như này
// content, createdAt, conversationId,
// sendeeId
export const mockMessage = [
  {
    content: "Hello",
    createdAt: 1,
    conversationId: "a",
    senderId: "quang",
  },
  {
    content: "mom",
    createdAt: 2,
    conversationId: "a",
    senderId: "anonymous",
  },
  {
    content: "How are you?",
    createdAt: 3,
    conversationId: "a",
    senderId: "quang",
  },
  {
    content: "I'm fine",
    createdAt: 4,
    conversationId: "a",
    senderId: "anonymous",
  },
];
