import React from "react";
import "./embed.scss";
// import TouchAppIcon from "@material-ui/icons/TouchApp";
const Embed = ({ type, embedUrl, title, height, link }) => {
	// const heightValue = () => {
	// 	return height ? height : (height = "100%");
	// };

	return (
		<div className="embed">
			<a
				className="embed-title"
				href={`https://${link}`}
				rel="noreferrer"
				target="_blank">
				<div className="embed-title-text">
					<p>{title}</p>
				</div>
				<div className="embed-title-link">{/* <TouchAppIcon /> */}</div>
			</a>

			{type === "iframe" ? (
				<iframe
					src={embedUrl}
					width="350px"
					height={height ? height : (height = "auto")}
					allowfullscreen="true"
					title="Embeded publication"></iframe>
			) : (
				<embed
					src="https://www.arturalves.com"
					style={{
						height: height ? height : (height = "100%"),
						width: "350px",
					}}
				/>
			)}
		</div>
	);
};

export default Embed;
