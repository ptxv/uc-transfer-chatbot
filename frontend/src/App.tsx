import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex flex-col items-center justify-center gap-8 bg-[radial-gradient(ellipse_at_center,#0E0E0E_25%,#106070_200%)]">
				<img
					src="/favicon.png"
					className="absolute top-0 left-0 h-24 p-2"
					alt="Logo of Developer's Guild"
				/>
				{/* * HERO */}
				<section className="flex min-h-[80svh] flex-col items-center justify-center gap-10 text-center text-3xl">
					<div>
						<h1 className="font-syne text-6xl leading-tight font-bold">
							Transfer to your
							<br />
							<span className="font-semibold text-primary">dream UC</span>
						</h1>
						<p className="leading-loose font-bold text-primary opacity-60">
							with an AI advisor in your corner.
						</p>
					</div>
					<p className="leading-tight font-medium text-primary">
						Ask any question about GPA requirements, ASSIST.org,
						<br />
						deadlines, and more — all tailored for
						<br />
						community college students.
					</p>
					<button className="btn rounded-3xl btn-xl btn-primary" onClick={() => navigate('/chat')}>
						Start chatting
					</button>
				</section>

				{/* * Fake chat demo */}
				<section className="flex w-4/5 flex-col gap-4 rounded-4xl border p-4 font-roboto text-2xl">
					<div className="chat-start chat">
						<div className="chat-bubble bg-primary/50">
							Hey! I'm (idk what name yet) 👋 I can help you navigate UC transfer requirements. What
							would you like to know?
						</div>
					</div>
					<div className="chat-end chat">
						<div className="chat-bubble bg-primary text-primary-content">
							What GPA do I need to transfer to UCLA as a CS major?
						</div>
					</div>

					<div className="chat-start chat">
						<div className="chat-bubble bg-primary/50">
							Great question! UCLA CS is one of the most competitive — admitted transfer students
							typically have a 3.8–4.0 GPA. The UC minimum is 2.4 for CA residents, but for impacted
							majors like CS, aim for a 3.5+ to be competitive. I'd also recommend completing all
							lower-division CS prerequisites before applying. Want me to list them?
						</div>
					</div>

					<div className="flex flex-row gap-4">
						<div className="flex grow items-center rounded-3xl border border-primary bg-base-100/50 px-4 backdrop-blur-md">
							Ask about courses to take, requirements, recommendations, ...
						</div>
						<button className="btn btn-circle btn-primary">
							<SendIcon></SendIcon>
						</button>
					</div>
				</section>
				<section className="flex w-full justify-center bg-primary/25 p-8 font-syne text-3xl font-medium">
					<div className="flex w-4/5 flex-col gap-4">
						<div className="text-primary">What we offer</div>
						<div>Everything you need to plan your transfer</div>
						<div className="grid grid-cols-2 gap-4">
							{[
								'GPA Requirements',
								'Deadlines & Timeline',
								'ASSIST.org & Transfer By Major Navigation',
								'IGETC/Cal - GETC Information',
								'TAG Program Help',
								'2-Years Roadmap'
							].map((item) => (
								<div className="rounded-3xl border border-primary bg-[#D9D9D906] p-4" key={item}>
									{item}
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="flex flex-col gap-4 font-syne">
					<div className="text-5xl font-bold text-primary">Three steps to clarity</div>
					<div className="text-3xl font-medium text-primary">
						No appointments. No waiting room. Just answers, instantly.
					</div>
					{['Ask', 'Get a detailed answer', 'Follow up freely', 'Verify with a counselor'].map(
						(item) => (
							<div className="rounded-3xl bg-base-content/20 p-4 text-3xl font-medium" key={item}>
								{item}
							</div>
						)
					)}
				</section>
				<section className="flex w-full justify-center bg-primary/25 p-5 font-syne font-medium">
					<div className="text-xl">Made with ♡ by the Developers' Guild in De Anza College.</div>
				</section>
			</div>
		</>
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
