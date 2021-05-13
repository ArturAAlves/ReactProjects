import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messagesender.scss";
import person1 from "./img/austin.jpg";

const MessageSender = (props) => {
	const [messageInput, setMessageInput] = useState("");

	const inputChange = (e) => {
		let value = e.target.value;
		setMessageInput(value);
	};
	console.log(messageInput);
	return (
		<div className="messagesender">
			<div className="messagesender-top">
				<Avatar src={person1} alt="zuk" />
				<h4>Zuk Boy</h4>
			</div>
			<div className="messagesender-divider"></div>
			<div className="messagesender-bottom">
				<input
					type="text"
					placeholder="What are you thinking?"
					onChange={inputChange}
					value={messageInput}
				/>
			</div>
		</div>
	);
};

export default MessageSender;
