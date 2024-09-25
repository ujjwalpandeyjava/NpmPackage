export default function ChatMessage({ chatObj }) {
	console.log(chatObj);
	if (chatObj.side === "bot")
		return (
			<div className="answer">
				Bot: {chatObj.text}
			</div>)
	else
		return (
			<div className="question">
				User: {chatObj.text}
			</div>
		)
}
