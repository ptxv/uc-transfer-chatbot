import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
import sendIcon from './assets/send-icon.png'
import dgLogo from './assets/dg-logo.png'

function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const navigate = useNavigate();

  async function sendMessage() {
    if (!message.trim()) return;
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message }),
      });
      const data = await response.json();
      setReply(data.reply);
    } catch (error) {
      console.error("Error sending message:", error);
      setReply("Error connecting to backend.");
    }
  }

  return (
    <>
      <img src={dgLogo} style={{ height: "94px", padding: "10px" }} alt="DG Logo" />
      <div className="main">
        <section id="center">
          <div>
            <h1>Transfer to your</h1>
            <h1 className="accentFont">dream UC</h1>
            <p className="accentFont" style={{ opacity: "0.6" }}>
              with an AI advisor in your corner.
            </p>
            <p className="accentFont">Ask any question about GPA requirements, ASSIST.org, deadlines, and more</p>
          </div>
          <button
            onClick={() => navigate("/chat")}
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              background: "#5BDDFF",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "16px",
              color: "#000",
              marginTop: "1rem",
            }}
          >
            Get Started →
          </button>
        </section>
        <section id="next-steps">
          <div style={{ marginTop: "2rem" }}>
            <input
              className="textBox"
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* TODO: fix button alignment with text box */}
            <button
              className="button"
              onClick={sendMessage}
            >
              <img src={sendIcon} style={{ height: "20px" }} alt="Send" />
            </button>

            {reply && (
              <div style={{ marginTop: "1rem" }}>
                <strong>Backend reply:</strong>
                <p>{reply}</p>
              </div>
            )}
          </div>
          <div id="social">
            <ul>
              <li>
                <a href="https://github.com/developersguildclub/uc-transfer-chatbot" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/nqbudRdstm" target="_blank">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </section>

        <div className="ticks"></div>
        <section id="spacer"></section>
      </div>
    </>
  );
}

export default Home;