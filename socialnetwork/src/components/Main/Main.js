import React from "react";
import "./Main.scss";
import Feed from "./Feed";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import { useStateValue } from "../../StateProvider";

const Main = () => {
	const [{ user }, dispach] = useStateValue();

	return (
		<div className="main">
			<div className="main-container">
				<StoryReel />
				<MessageSender />
				<Feed />
			</div>
		</div>
	);
};

export default Main;
