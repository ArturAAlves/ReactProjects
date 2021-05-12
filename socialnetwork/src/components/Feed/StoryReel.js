import React from "react";
import "./storyreel.scss";
import Story from "./Story";
import person1 from "./img/austin.jpg";
import background1 from "./img/background1.jpg";

const StoryReel = () => {
	return (
		<div className="storyreel">
			<Story id="1" tittle="Hello" img={background1} profile={person1} />
		</div>
	);
};

export default StoryReel;
