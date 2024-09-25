export default function ChatMessage({ chatObj }) {
	console.log(chatObj);
	if (chatObj.side === "bot")
		return (
			<>
				Bot: {chatObj.text}
			</>)
	else
		return (
			<div>User: {chatObj.text}</div>
		)
}
