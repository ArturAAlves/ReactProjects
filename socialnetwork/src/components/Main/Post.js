import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";

const Post = ({ image, message, profilePic, timestamp, username }) => {
	// console.log("posts", img, message, profilePic, timestamp, username);
	// {
	// 	profileImg, image, userName, timeStamp, message;
	// }

	console.log();
	return (
		<div className="post">
			<div className="post-user">
				<Avatar src={profilePic} alt={username} />
				<div>
					<h4> {username}</h4>
					<p> {new Date(timestamp?.toDate()).toUTCString()}</p>
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
			<div className="post-reply">
				<Avatar
					src="https://exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg"
					alt="elon"
				/>
				<div className="post-reply-input">
					<div>
						<input type="text" placeholder="Write a commenent..." />
						<SendIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
