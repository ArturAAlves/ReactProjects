import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messagesender.scss";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import firebase from "firebase";

const MessageSender = (props) => {
	const [{ user }, dispach] = useStateValue();
	const [messageInput, setMessageInput] = useState();
	const [imageUrl, setImageUrl] = useState();

	const inputChange = (e) => {
		let value = e.target.value;
		setMessageInput(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// var washingtonRef = db.collection("posts").doc("vG1GdCtkd9AJWDR1wAOx");

		// // Set the "capital" field of the city 'DC'
		// return washingtonRef
		// 	.update({
		// 		message: messageInput,
		// 	})
		// 	.then(() => {
		// 		console.log("Document successfully updated!");
		// 	})
		// 	.catch((error) => {
		// 		// The document probably doesn't exist.
		// 		console.error("Error updating document: ", error);
		// 	});
		db.collection("posts").add({
			message: messageInput,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image:
				"https://images.newscientist.com/wp-content/uploads/2021/03/04154355/04-march_frog-lungs.jpg",
		});
	};

	return (
		<div className="messagesender">
			<div className="messagesender-top">
				<Avatar src={user.photoURL} alt="zuk" />
				<h4>{user.displayName}</h4>
			</div>
			<div className="messagesender-divider"></div>
			<div className="messagesender-bottom">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="What are you thinking?"
						onChange={inputChange}
						value={messageInput}
					/>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
	);
};

export default MessageSender;