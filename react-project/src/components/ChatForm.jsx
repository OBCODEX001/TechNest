import { useRef } from "react";
const ChatForm = ({ setChatHistory, generateBotResponse, chatHistory }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    // Update chat history with the user's message
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

   setTimeout(()=>{
     // Add a thinking... placeholder for the bots response
    setChatHistory((history)=> [...history, {role: "model", text: "Thinking..."}]);
  
   //  Call the function to generate the bots response
  generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);

  },600)

 
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Message....."
        className="message-input"
        required
        ref={inputRef}
      />
      <button className="material-symbols-outlined">keyboard_arrow_up</button>
    </form>
  );
};

export default ChatForm;
