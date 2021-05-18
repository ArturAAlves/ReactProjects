import { Avatar } from "@material-ui/core";
import React from "react";
import "./story.scss";
const Story = ({ id, message, image, profile }) => {
	return (
		<div className="story">
			<img src={image} alt="" className="story-img" />
			<div className="story-avatar-container">
				<Avatar src={profile} alt="" />
			</div>
			<div className="story-tittle-container">
				<h4>{message}</h4>
			</div>
		</div>
	);
};

export default Story;
