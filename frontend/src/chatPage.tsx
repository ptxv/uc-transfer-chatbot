import { useState, useRef, useEffect } from "react";
import "./chatPage.css";

interface Message {
  role: "bot" | "user";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hey! I'm (idk what name yet) 👋 I can help you navigate UC transfer requirements. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleReset() {
    setMessages([
      {
        role: "bot",
        text: "Hey! I'm (idk what name yet) 👋 I can help you navigate UC transfer requirements. What would you like to know?",
      },
    ]);
    setInput("");
  }

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    const res = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="cp-page">
      <div className="cp-topbar">
        <img src="/favicon.svg" className="cp-logo" alt="logo" />
        <button className="cp-reset-btn" onClick={handleReset}>Reset</button>
      </div>

      <div className="cp-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`cp-bubble-row ${msg.role}`}>
            <div className={`cp-bubble ${msg.role}`}>{msg.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="cp-input-bar">
        <input
          type="text"
          className="cp-input"
          placeholder="Ask about courses to take, requirements, recommendations,..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="cp-send-btn" onClick={handleSend} aria-label="Send">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" fill="white" stroke="none"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
