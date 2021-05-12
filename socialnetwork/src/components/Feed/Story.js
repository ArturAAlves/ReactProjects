import { Avatar } from "@material-ui/core";
import React from "react";
import "./story.scss";

const Story = ({ id, tittle, img, profile }) => {
	return (
		<div className="story">
			<img src={img} alt="" />
			<Avatar src={profile} alt="" />
			<h4>{tittle}</h4>
		</div>
	);
};

export default Story;
