import React from "react";
import "./news.scss";

const News = ({ imgLink, name, link, linkName }) => {
	return (
		<a
			className="news"
			href={`https://${link}`}
			rel="noreferrer"
			target="_blank">
			<div className="news-top">
				<img src={imgLink} alt={name} />
			</div>
			<div className="news-bottom">
				<h5>{name}</h5>
			</div>
		</a>
	);
};

export default News;
