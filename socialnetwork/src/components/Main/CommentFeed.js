import React, { useEffect, useState } from "react";
import "./commentfeed.scss";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
const CommentFeed = ({ id }) => {
	const [{ user }, dispach] = useStateValue();
	const [comments, setComments] = useState(null);
	const [commentFeed, setCommentFeed] = useState(null);

	useEffect(() => {
		if (user) {
			db.collection("comments")
				.orderBy("timestamp", "desc")
				.onSnapshot((snapshot) => {
					setComments(
						snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
					);
				});
		}
	}, []);

	useEffect(() => {
		if (user && comments) {
			// console.log("id do post principal", id.id);
			// console.log(comments);
			let result = comments.filter((item) =>
				// (item) => console.log(item.data.responseTo.id)
				id === item.data.responseTo.id ? item : ""
			);
			setCommentFeed(result);

			// console.log("result", result);
		}
	}, [comments]);

	return (
		<div className="commentFeed">
			{commentFeed
				? commentFeed.map((item) => (
						<div className="comment" key={item.id}>
							{item.data.message}
						</div>
				  ))
				: "jeeeasda"}
		</div>
	);
};

export default CommentFeed;
