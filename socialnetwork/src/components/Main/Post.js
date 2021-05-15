import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import db from "../../firebase";
// import firebase from "firebase";
import SendComment from "./SendComment";
import CommentFeed from "./CommentFeed";

const Post = ({ image, message, profilePic, timestamp, username, id }) => {
	const handleDelete = (e) => {
		e.preventDefault();
		db.collection("posts")
			.doc(id)
			.delete()
			.then(() => {
				console.log("Document successfully deleted!");
			})
			.catch((error) => {
				console.error("Error removing document: ", error);
			});
	};

	// ek1MvIYeG1DcNsrLEGti;

	return (
		<div className="post">
			<div className="post-user">
				<Avatar src={profilePic} alt={username} />
				<div>
					<h4> {username}</h4>
					<p> {new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
				<div>
					<button onClick={handleDelete}>X</button>
				</div>
			</div>
			<div className="post-text">
				<p>{message}</p>
			</div>
			<div className="post-img">
				<img src={image} alt={message} />
			</div>
			<div className="post-reaction">
				<div className="post-reaction-left">
					<p>❤👍 Reactions</p>
				</div>
				<div className="post-reaction-right">
					<p>Comments</p>
				</div>
			</div>
			<div className="post-divider-1"></div>
			<div className="post-actions">
				<div className="post-action-like">
					<ThumbUpIcon />
				</div>
				<div className="post-action-comment">
					<ChatBubbleOutlineIcon />
				</div>
				{/* <div className="post-action-share">
					2:36
					<SendIcon />
				</div> */}
			</div>

			{/* hide without comments */}
			<div className="post-divider-2"></div>
			<div>
				<CommentFeed id={id} />
			</div>

			<SendComment id={id} />
		</div>
	);
};

export default Post;