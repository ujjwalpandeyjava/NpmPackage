import { useEffect, useRef, useState } from 'react';
import downArrow from "./assets/downArrow.svg";
import minimize from "./assets/minimize.svg";
import message from "./assets/message.svg";
import close from "./assets/close.svg";
import './index.scss';



function IMBot() {
	const [showModal, setShowModal] = useState();
	const [chat, setChat] = useState([]);
	const inputTxt = useRef();

	function toggleChatBox() {
		setShowModal(old => !old)
		addIntroductionMessage()
	}

	function addIntroductionMessage() {
		console.log("addIntroductionMessage...");
		if (chat.length < 1)
			setTimeout(() => {
				setChat(old => [...old, { side: "bot", text: "How can I help you?" }])
			}, 750);
	}

	// Toggle focus on the input text field
	useEffect(() => {
		if (inputTxt)
			if (showModal)
				inputTxt.current.focus()
			else
				inputTxt.current.blur()
	}, [showModal])

	return (
		<div className="bubble">
			<div className={`updateIcon ${showModal ? "active" : ""}`} onClick={toggleChatBox}>
				<div>
					<img src={message} alt="message" />
				</div>
				<div>
					<img src={downArrow} alt="message" />
				</div>
			</div>
			<div className="botArea">
				<section className="botSection">
					<div className="header">
						<div className="btn menuOptions">
							<img src={close} alt="close btn" />
						</div>
						<div className="logoTitle">
							<img src="https://api.intellylabs.com/logo_image" alt="alt..." />
							<div className="botChatTitle" title="Bot Title...">Bot Title...</div>
						</div>
						<div className="minimizeClose">
							<div className="btn">
								<img src={minimize} alt="close btn" />
							</div>
							<div className="btn">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
									<path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
								</svg>
							</div>
						</div>
					</div>
					<div className="content">
						<div className="content_chat" id="content_chat"></div>
						<div className="content_chatInputs">
							<input type="text" id="inputFieldText" ref={inputTxt} placeholder="Message" />
						</div>
					</div>
					<section className="settingSection settingHidden" id="settingHidden">
						<div className="settingHeader">
							<div className="btn">X</div>
						</div>
						<div className="settingBody">
							What is Lorem Ipsum?
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

							Why do we use it?
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

							Why do we use it?
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

							Where does it come from?
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.
						</div>
					</section>
				</section>
			</div>
		</div>
	)
}

export default IMBot