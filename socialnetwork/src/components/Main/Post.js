import { Avatar } from "@material-ui/core";
import React from "react";
import "./post.scss";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";

const Post = ({ profileImg, image, userName, timeStamp, message }) => {
	return (
		<div className="post">
			<div className="post-user">
				<Avatar src={profileImg} />
				<div>
					<h4>{userName} Matias</h4>
					<p>{timeStamp} TimeStamp</p>
				</div>
			</div>
			<div className="post-text">
				<p>{message}</p>
			</div>
			<div className="post-img">
				<img src={image} alt={message} />
			</div>
			<div className="post-reaction">
				<div className="post-reaction-left">❤👍 Reactions</div>
				<div className="post-reaction-right">Comments</div>
			</div>
			<div className="post-actions">
				<div className="post-action-like">
					<ThumbUpIcon />
				</div>
				<div className="post-action-comment">
					<ChatBubbleOutlineIcon />
				</div>
				<div className="post-action-share">
					2:36
					<SendIcon />
				</div>
			</div>
		</div>
	);
};

export default Post;
