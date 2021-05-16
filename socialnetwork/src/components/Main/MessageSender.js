import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./messagesender.scss";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import { db, storage } from "../../firebase";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import SendIcon from "@material-ui/icons/Send";
// import storage from "../../firebase";

const MessageSender = (props) => {
	const [{ user }, dispach] = useStateValue();
	const [messageInput, setMessageInput] = useState("");
	const [imageUpload, setImageUpload] = useState("");
	const [imageLink, setImageLink] = useState("");
	const [progress, setProgress] = useState(0);

	const inputChange = (e) => {
		let value = e.target.value;
		setMessageInput(value);
	};

	const onFileChange = (e) => {
		console.log(storage);
		if (e.target.files[0]) {
			setImageUpload(e.target.files[0]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (imageUpload && messageInput) {
			const uploadTask = storage
				.ref(`images/${imageUpload.name}`)
				.put(imageUpload);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(progress);
				},
				(error) => {
					console.log(error);
				},
				() => {
					storage
						.ref("images")
						.child(imageUpload.name)
						.getDownloadURL()
						.then((url) => {
							pumpMessage(url);
							cleanUp();
						});
				}
			);
		} else if (messageInput !== "" && messageInput !== null) {
			pumpMessage("");
			cleanUp();
		}
	};

	const pumpMessage = (url) => {
		db.collection("posts").add({
			message: messageInput,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: url,
			id: user.email,
		});
	};

	const cleanUp = () => {
		setImageLink((e) => (e = ""));
		setMessageInput((e) => (e = ""));
		setImageUpload((e) => (e = null));
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

					<input type="file" onChange={onFileChange} id="upload" hidden />
					<label for="upload" className="uploadButton">
						{imageUpload ? imageUpload.name : ""}
						<PhotoLibraryIcon />
					</label>

					<button type="submit">
						<SendIcon />
					</button>
				</form>
			</div>
		</div>
	);
};

export default MessageSender;
