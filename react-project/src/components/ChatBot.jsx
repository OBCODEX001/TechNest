import { useState, useLayoutEffect, useRef } from "react";
import chatBotImage from "../assets/chatbot.png"
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import "./ChatBot.css"

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [IsOpen, setIsOpen ] = useState(false)
  // Reference to the chat body
  const chatBodyRef = useRef(null);

  // Automatically scroll to the latest message after it renders
  useLayoutEffect(() => {
    const chatBody = chatBodyRef.current;
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }, [chatHistory]);

  // TechNest information for the AI
  const techNestKnowledge = `
You are the official TechNest customer assistant.

ABOUT TECHNEST:
TechNest is a Nigerian technology and electronics store that provides a range of consumer electronics, tech accessories, home appliances, audio products, televisions, headphones, and wearable technology.

Your job is to help customers understand TechNest products, categories, prices, and how to contact the store.

TECHNEST PRODUCT CATEGORIES:
1. Accessories
2. Headphones
3. Wearable Technology
4. Home Audio
5. Television & Audio
6. Home Appliances

ACCESSORIES:
- Binatone Automatic Voltage Protector (AVP-1300) - ₦12,200
- Skyrun 5 Sockets 2 Metre Cord Power Strip Extension Box - ₦6,850
- Duravolt 1KVA Automatic Voltage Stabilizer - ₦43,000
- Qasa Rechargeable Fan Replacement Lead-Acid Battery - ₦16,500
- Duravolt 2000VA Relay Automatic Voltage Stabilizer - ₦61,000
- Qasa 1000W AVR-PRO 1000VA Digital Stabilizer - ₦47,000
- Binatone 5000VA Digital Voltage Stabilizer (DVS-5001) - ₦149,405
- Century Extension Socket With Surge Protector - ₦15,000

HEADPHONES & EARBUDS:
- Soundcore H30i Wireless Headphones - ₦38,999
- Soundcore K20i Wireless Earbuds - ₦19,999
- Soundcore Space Q45 Wireless Headphones - ₦114,999
- Oraimo SpaceBuds N True Wireless Earbuds - ₦26,899
- Soundcore R50i Wireless Earbuds - ₦21,550
- Soundcore Liberty 4 NC Earbuds - ₦89,999

HOME APPLIANCES:
- Teppo 1.7L Heavy Duty Food Processor & Countertop Blender - ₦17,266
- Qasa 1000W Portable Electric Steam and Spray Iron - ₦16,900
- Oraimo SmartBlender Go - ₦35,899
- Oraimo AromaGo Waterless Rechargeable Aromatherapy Device - ₦22,896
- Polystar 5L Automatic Electric Kettle - ₦29,999
- Oraimo MistGo Portable Aroma Diffuser - ₦26,899
- MeWe 2200W Portable Steam Iron - ₦21,850
- MeWe MWIRON 04Y Dry & Spray Steam Iron - ₦20,805

HOME AUDIO:
- Mi+ Home Theater 3.1 Channel System 95W - ₦58,500
- MIJ 2.1CH Bluetooth Multimedia Speaker System - ₦29,999
- Mi+ Bluetooth Multimedia Speaker System 30W - ₦30,500
- MIJ 2.1 Channel Bluetooth Soundbar - ₦42,999
- Hisense Soundbar With Subwoofer 140W - ₦121,000
- Zealot 80W Super Bass Bluetooth Speaker - ₦89,999
- Mi+ 3.1CH Home Theater Bluetooth Speaker - ₦35,999
- Mi+ 5.1CH Bluetooth Home Theater System 100W - ₦79,999

TELEVISIONS:
- LP 32-inch Smart TV, Android 14 - ₦117,000
- Mi+ 32-inch Smart Digital Frameless TV - ₦104,900
- Mi+ 43-inch Smart Digital Satellite Frameless TV - ₦195,116
- Mi+ 32-inch Digital Frameless HD LED TV - ₦86,999
- TCL 55-inch UHD 4K Google Smart TV - ₦459,000
- TCL 43-inch QLED Google Smart TV - ₦299,999

SAMPLE BEST SELLERS:
- Wireless Earbuds Pro - ₦45,999
- Smartwatch Ultra - ₦89,999
- Portable Bluetooth Speaker - ₦34,999
- Gaming Mouse RGB - ₦12,999
- Noise Cancelling Headphones - ₦67,999
- Fitness Tracker Watch - ₦29,999
- Premium Home Speaker - ₦55,999
- Wireless Mouse - ₦8,999

CONTACT:
Customers can contact TechNest on 08066756874.

CUSTOMER RESPONSE RULES:
- Be friendly, helpful, and concise.
- Speak naturally to Nigerian customers.
- Use ₦ for Nigerian Naira prices.
- If a customer asks about a product listed above, provide the available information and price.
- Do not invent a product, price, discount, specification, stock status, warranty, delivery fee, or delivery time that has not been provided.
- If you don't have the information, clearly say that the customer should contact TechNest on 08066756874 for confirmation.
- If a customer asks how to contact TechNest, provide 08066756874.
- If a customer asks for recommendations, recommend products only from the products listed above and explain briefly why.
- If a customer asks something unrelated to TechNest, you can still answer normally.
- Keep TechNest-related questions focused on the business.
`;

  const generateBotResponse = async (history) => {
    // Groq uses OpenAI-style message roles:
    // user / assistant / system
    const messages = history.map(({ role, text }) => ({
      role: role === "model" ? "assistant" : role,
      content: text,
    }));

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: [
          {
            role: "system",
            content: techNestKnowledge,
          },
          ...messages,
        ],
      }),
    };

    try {
      console.log("Sending request to Groq...");

      const response = await fetch(
        import.meta.env.VITE_GROQ_API_URL,
        requestOptions
      );

      console.log("Groq responded:", response.status);

      const data = await response.json();

      console.log("Groq data:", data);

      if (!response.ok) {
        throw new Error(
          data?.error?.message || "Something went wrong"
        );
      }

      const botResponse = data.choices?.[0]?.message?.content;

      if (!botResponse) {
        throw new Error("Groq returned an empty response.");
      }

      console.log("Bot response:", botResponse);

      setChatHistory((history) => [
        ...history.filter((chat) => chat.text !== "Thinking..."),
        {
          role: "model",
          text: botResponse,
        },
      ]);
    } catch (error) {
      console.error("Groq error:", error);

      setChatHistory((history) => [
        ...history.filter((chat) => chat.text !== "Thinking..."),
        {
          role: "model",
          text: "Sorry, I'm having trouble responding right now. Please try again or contact TechNest on 08066756874.",
        },
      ]);
    }
  };

  return (
   <>
    <div className="box" onClick={()=>setIsOpen(!IsOpen)}>
      <img src={chatBotImage} alt="" />
    </div>
   
    <div className="container">
      
      {IsOpen && 
      <div className="chatbot-popup">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">TechNest Chatbot</h2>
          </div>

          <button className="material-symbols-outlined" onClick={()=>setIsOpen((prev)=> !prev)}>
            keyboard_arrow_down
          </button>
        </div>

        {/* Chatbot Body */}
        <div className="chat-body" ref={chatBodyRef}>
          <div className="message bot-message">
            <ChatbotIcon />

            <p className="message-text">
              Hey there 👋 <br />
              how can i help you today?
            </p>
          </div>

          {/* Render the chat dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>

        {/* Chat Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
      }
    </div>
</>
  );
};

export default Chatbot;
