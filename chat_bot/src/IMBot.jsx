import { FaChevronDown, FaRegWindowMinimize } from "react-icons/fa";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import React, { useEffect, useRef, useState } from 'react';
import { RiCloseLargeFill } from "react-icons/ri";
import { IoMdChatboxes } from "react-icons/io";
import { HashLoader } from "react-spinners"
import ChatMessage from "./ChatMessage"
import UseApi from "./UseApi";
import './IMBot.scss';


function IMBot() {
	const [showBot, setShowBot] = useState(false);
	const [isSettingHidden, setIsSettingHidden] = useState(true);
	const { hitApiWith: hitApiIsValidWeb, loading: loadingIsValidWeb, data: dataIsValidWeb, setData: setDataIsValidWeb, error: errorIsValidWeb } = UseApi();
	const { hitApiWith: hitApiUserQuery, loading: loadingUserQuery, data: dataUserQuery, setData: setDataUserQuery, error: errorUserQuery } = UseApi();
	const [chat, setChat] = useState([]);
	const fieldInputQuery_Ref = useRef(null);

	useEffect(() => {
		hitApiIsValidWeb("/botAuth/isValid", "GET");
	}, [])

	function minimizeBot() {
		setShowBot(old => !old)
	}
	function toggleChatBox() {
		minimizeBot()
		addIntroductionMessage()
	}

	function addIntroductionMessage() {
		if (chat.length < 1)
			setTimeout(() => {
				addInChat("bot", "How can I help you?")
			}, 750);
	}

	// Toggle focus on the input text field
	useEffect(() => {
		if (fieldInputQuery_Ref?.current) {
			if (showBot)
				fieldInputQuery_Ref.current.focus()
			else
				fieldInputQuery_Ref.current.blur()
		}
	}, [showBot])
	/**
	 * Minimize the bot, 
	 */
	function resetBot() {
		console.log("resetBot...");
		setShowBot(false)
		initSession()
	}
	/**
	 * Reset the session...
	*/
	function initSession() {
		console.log("initSession...");
		setChat([]);
	}
	function toggleSettings() {
		setIsSettingHidden(old => !old)
	}

	function getQueryResponse(query) {
		console.log("Query to send on server: ", query);
		addInChat("user", query)
		fieldInputQuery_Ref.current.value = null;
		hitApiUserQuery("/botAuth/queryResponse", "GET", { query })
	}
	useEffect(() => {
		console.log(dataUserQuery);
		if (dataUserQuery?.data?.haveAnswer) {
			setChat(oldChat => [...oldChat, { side: "bot", text: dataUserQuery.data.text }])
		}

	}, [dataUserQuery])

	const handleKeyPress = (event) => {
		if (fieldInputQuery_Ref?.current?.value) {
			if (event.key === 'Enter') {
				event.preventDefault(); 	// Prevent page reload on Enter
				getQueryResponse(fieldInputQuery_Ref.current.value);
			} else
				validateTxt(fieldInputQuery_Ref?.current?.value)
		}
	};
	function validateTxt(textToValidate) {
		console.log("Validate txt: ", textToValidate);
	}
	function addInChat(whoMadeTxt, text) {
		setChat(oldChat => [...oldChat, { side: whoMadeTxt, text }])
	}



	if (loadingIsValidWeb) {
		return (
			<div className="loadingBot">
				<HashLoader color="orange" />
			</div>
		)
	} else if (errorIsValidWeb) {
		return (
			<div className="errorInBotLoading">
				{errorIsValidWeb}
			</div>
		)
	} else if (dataIsValidWeb?.allowed === true) {
		return (
			<div className="bubble">
				<div className={`showModal ${showBot ? "active" : ""}`} onClick={toggleChatBox}>
					<div>
						<IoMdChatboxes />
					</div>
					<div>
						<FaChevronDown />
					</div>
				</div>
				<div className="botArea">
					<section className="botSection">
						<div className="header">
							<div className="btn">
								<PiDotsThreeOutlineVerticalFill onClick={toggleSettings} />
							</div>
							<div className="logo_and_title">
								<img src={dataIsValidWeb.botConfig.botLogo} alt="alt..." />
								<div title="Bot name">{dataIsValidWeb.botConfig.botTitle}</div>
							</div>
							<div className="minimizeClose">
								<div className="btn">
									<FaRegWindowMinimize onClick={minimizeBot} />
								</div>
								<div className="btn">
									<RiCloseLargeFill onClick={resetBot} />
								</div>
							</div>
						</div>
						<div className="content">
							<div className="content_chat" >
								{chat.map((eachChat, index) => <ChatMessage chatObj={eachChat} key={"chat_" + index} />)}
							</div>
							<div className="content_chatInputs">
								<input type="text" id="inputFieldText" ref={fieldInputQuery_Ref} placeholder="Message" onKeyDownCapture={handleKeyPress} />
							</div>
						</div>
					</section>
					<section className={`settingSection ${isSettingHidden ? "settingHidden" : ""}`} id="settingHidden">
						<div className="settingHeader">
							<div className="btn settingCloseBtn" onClick={toggleSettings}>X</div>
						</div>
						<div className="settingBody">
							give settings...
						</div>
					</section>
				</div>
			</div>
		)
	} else if (!dataIsValidWeb || !dataIsValidWeb?.allowed || dataIsValidWeb.allowed === false) {
		return <div className="bubble">Unauthorized website!</div>
	} else {
		return <div className="bubble">Checking Info...</div>
	}
}

export default IMBot