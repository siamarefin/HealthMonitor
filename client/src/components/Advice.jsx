import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/Advice.css";

const Advice = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about your health." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/advice", { question: input });
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: res.data.answer },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "Sorry, I couldn't process your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="advice-chat-outer">
      <div className="advice-chat-inner">
        <div className="advice-chat-header">
          {/* <img src="/doctor1.png" alt="Doctor" className="advice-chat-avatar" />
          <span className="advice-chat-title">Health Advice Chat</span> */}
        </div>

        <div className="advice-chat-box">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={
                msg.sender === "user"
                  ? "advice-chat-message user"
                  : "advice-chat-message bot"
              }
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          {loading && <div className="advice-chat-message bot">Typing...</div>}
          <div ref={chatEndRef} />
        </div>

        <form className="advice-chat-form" onSubmit={handleSend}>
          <input
            type="text"
            className="advice-chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything"
            disabled={loading}
            autoFocus
          />
          <button
            type="submit"
            className="advice-chat-send"
            disabled={loading || !input.trim()}
          >
            <span role="img" aria-label="Send">
              ➤
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advice;
