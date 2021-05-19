import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const handleOpen = () => {
		setSidebarOpen((e) => (e = !e));
	};

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div className={!sidebarOpen ? "sidebar " : "sidebar  sidebar-open"}>
			{width <= 1350 ? (
				<div className="open-sidebar" onClick={handleOpen}>
					{!sidebarOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
				</div>
			) : (
				""
			)}
			<div className="sidebar-item"></div>
			<div className="sidebar-item"></div>
			<div className="sidebar-item"></div>
		</div>
	);
};

export default Sidebar;
