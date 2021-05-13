import { Avatar } from "@material-ui/core";
import React from "react";
import "./story.scss";

const Story = ({ id, tittle, img, profile }) => {
	return (
		<div className="story">
			<img src={img} alt="" className="story-img" />
			<div className="story-avatar-container">
				<Avatar src={profile} alt="" />
			</div>
			<div className="story-tittle-container">
				<h4>{tittle}</h4>
			</div>
		</div>
	);
};

export default Story;
