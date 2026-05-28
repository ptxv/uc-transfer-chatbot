import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
	role: 'bot' | 'user';
	text: string;
}

export default function ChatPage() {
	const navigate = useNavigate();
	const [messages, setMessages] = useState<Message[]>([
		{
			role: 'bot',
			text: "Hey! I'm (idk what name yet) 👋 I can help you navigate UC transfer requirements. What would you like to know?"
		}
	]);
	const [input, setInput] = useState('');
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	function handleReset() {
		setMessages([
			{
				role: 'bot',
				text: "Hey! I'm (idk what name yet) 👋 I can help you navigate UC transfer requirements. What would you like to know?"
			}
		]);
		setInput('');
	}

	async function handleSend() {
		const trimmed = input.trim();
		if (!trimmed) return;
		setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
		setInput('');
		const res = await fetch('http://127.0.0.1:5000/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: trimmed })
		});
		const data = await res.json();
		setMessages((prev) => [...prev, { role: 'bot', text: data.reply }]);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === 'Enter') handleSend();
	}

	return (
		<div className="flex h-screen flex-col">
			<header className="flex flex-row items-center justify-between border-b p-4">
				<a href="/">
					<img src="/favicon.png" className="h-14" alt="Logo of Developer's Guild" />
				</a>
				<button className="btn rounded-3xl btn-xl btn-primary" onClick={handleReset}>
					Reset
				</button>
			</header>

			<main className="flex-1 overflow-y-auto p-4">
				<div className="flex min-h-full flex-col justify-end p-4">
					{messages.map((msg, i) =>
						msg.role === 'bot' ? (
							<div key={i} className="chat-start chat">
								<div className="chat-bubble bg-primary/50">{msg.text}</div>
							</div>
						) : (
							<div key={i} className="chat-end chat">
								<div className="chat-bubble bg-primary text-primary-content">{msg.text}</div>
							</div>
						)
					)}
				</div>
				<div ref={bottomRef} />
			</main>

			<div className="flex flex-row gap-4 border-t p-4">
				<input
					className="input w-full rounded-3xl input-primary"
					type="text"
					placeholder="Ask about courses to take, requirements, recommendations,..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button className="btn btn-circle btn-primary" onClick={handleSend} aria-label="Send">
					{SendIcon()}
				</button>
			</div>
		</div>
	);
}

function SendIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			className="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
			/>
		</svg>
	);
}
