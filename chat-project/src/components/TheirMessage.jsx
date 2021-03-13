const TheirMessage = ({ lastMessage, message }) => {
	const isFirstMessageByuser =
		!lastMessage || lastMessage.sender.username !== message.sender.username;

	return (
		<div className="message-row">
			{isFirstMessageByuser && (
				<div
					className="message-avatar"
					style={{ backgroundImage: `url(${message?.sender?.avatar})` }}></div>
			)}
			{message?.attachments?.length > 0 ? (
				<img
					src={message.attachments[0].file}
					alt="message-attachment"
					className="message-image"
					style={{ marginLeft: isFirstMessageByuser ? "4px" : "48px" }}
				/>
			) : (
				<div
					className="message"
					style={{
						float: "left",
						background: "#CABCDC",
						marginLeft: isFirstMessageByuser ? "4px" : "48px",
					}}>
					My Message
				</div>
			)}
		</div>
	);
};

export default TheirMessage;
