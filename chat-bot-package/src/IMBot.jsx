import React, { useEffect, useRef, useState } from 'react';
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoMdChatboxes } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import './IMBot.scss';

function IMBot() {
	const [showModal, setShowModal] = useState(false);
	const [webData, setWebData] = useState({});
	const [chat, setChat] = useState([]);

	const inputTxt = useRef(null);

	useEffect(() => {
		fetch('http://localhost:8883/botAuth/isValid', { method: "GET" })
			.then(response => {
				if (response.status === 200)
					return response.json();
				else
					throw new Error("Unauthorized website!")
			})
			.then(data => {
				data = { ...data, botTitle: "Bot Title..." }		// Demo, data wil come from server
				// throw new Error("Unauthorized website!")
				// setWebData({})
				setWebData(data)
			})
			.catch(error => {
				console.error(error.message, error);

				// alert(`Error: ${error.message}`);
			});
	}, [])
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
		if (inputTxt?.current) {
			if (showModal)
				inputTxt.current.focus()
			else
				inputTxt.current.blur()
		}
	}, [showModal])

	if (webData?.allowed === true) {
		return (
			<div className="bubble">
				<div className={`showModal ${showModal ? "active" : ""}`} onClick={toggleChatBox}>
					<div>
						<IoMdChatboxes />
						{/* <img src={message} alt="message" /> */}
					</div>
					<div>
						<FaChevronDown />
						{/* <img src={downArrow} alt="message" /> */}
					</div>
				</div>
				<div className="botArea">
					<section className="botSection">
						<div className="header">
							<div className="btn">
								<PiDotsThreeOutlineVerticalFill />
								{/* <img src={menu} alt="Close and minimize bot" /> */}
							</div>
							<div className="logo_and_title">
								<img src="https://api.intellylabs.com/logo_image" alt="alt..." />
								<div className="botChatTitle" title="Bot Title...">Bot Title...</div>
							</div>
							<div className="minimizeClose">
								<div className="btn">
									<FaRegWindowMinimize />
									{/* <img src={minimize} alt="Minimize bot" /> */}
								</div>
								<div className="btn">
									<RiCloseLargeFill />
									{/* <img src={close} alt="Menu options" /> */}
								</div>
							</div>
						</div>
						<div className="content">
							<div className="content_chat" id="content_chat"></div>
							<div className="content_chatInputs">
								<input type="text" id="inputFieldText" ref={inputTxt} placeholder="Message" />
							</div>
						</div>
					</section>
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
				</div>
			</div>
		)
	} else if (!webData || !webData?.allowed || webData.allowed === false)
		return <div className="bubble">Unauthorized website!</div>
	else
		return <div className="bubble">Checking Info...</div>
}

export default IMBot