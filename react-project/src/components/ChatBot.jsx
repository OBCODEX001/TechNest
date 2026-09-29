import chatbotImage from "../assets/chatbot.png";
import "./ChatBot.css";
import { useState,useEffect } from "react";
import { getUsers, sendChatMessage } from "../services/api";
import { Send, X } from "lucide-react"

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)

  const sendMessage = async (event) => {
    event.preventDefault();
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const response = await sendChatMessage(trimmedMessage, messages);
    setMessages((currentMessages) => [
      ...currentMessages,
      { text: trimmedMessage, sender: "user" },
      { text: response.reply, sender: "bot" },
    ]);
    setMessage("");
  }
  useEffect(()=>{
    const testApi=async()=>{
    const getUser = await getUsers();
    setUsers(getUser)
    setLoading(false)
  }
testApi()
  },[])
 

  const useQuickPrompt = (prompt) => {
    setMessage(prompt);
  };

  return (
    <>
      <button
        className="chatbotImageContainer"
        type="button"
        aria-label={open ? "Close support chat" : "Open support chat"}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <img src={chatbotImage} alt="" />
      </button>
      {open &&
        <div className="chatBotContainer">
          <div className="chatBotHeader">
            <div className="chatBotHeaderImage">
              <img src={chatbotImage} alt="" />
            </div>
            <div className="HeaderTextContainer">
              <h1>TechNest Support</h1>
              <div className="status">
                <span className="online-dot"></span>
                <span>Usually replies instantly</span>
              </div>
            </div>
            <button className="closeChatButton" type="button" aria-label="Close support chat" onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>
          <div className="chatArea">
            {loading ? "Loading...." : messages.map((chatMessage, index) => (
              
              <div className={`chatMessage ${chatMessage.sender}`} key={`${chatMessage.sender}-${index}`}>
                {chatMessage.text}
              </div>

              
            )) }
           
            {/* {
              users.map((user)=>(
              <div key={user.id}>
                <h1>{user.name}</h1>
              </div>
              ))
            } */}
            <div className="quickPrompts">
              <button type="button" onClick={() => useQuickPrompt("Where is my order?")}>Where is my order?</button>
              <button type="button" onClick={() => useQuickPrompt("Help me choose a product")}>Choose a product</button>
            </div>
          </div>
          <form className="inputArea" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type a message..."
              aria-label="Message"
            />
            <button type="submit" aria-label="Send message" ><Send size={18} /></button>
          </form>
        </div>
      }
    </>
  );
};

export default ChatBot;
