import React from "react";
import "./header.scss";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import Avatar from "@material-ui/core/Avatar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import AddIcon from "@material-ui/icons/Add";
const Header = () => {
	return (
		<div className="header">
			<div className="header-left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
					alt="fb-logo"
				/>
				<div>
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header-center">
				<div className="header-option  option-border-active">
					<HomeIcon className="option-active" />
				</div>
				<div className="header-option">
					<FlagIcon />
				</div>
				<div className="header-option">
					<SubscriptionsIcon />
				</div>
				<div className="header-option">
					<StorefrontIcon />
				</div>
				<div className="header-option">
					<SupervisedUserCircleIcon />
				</div>
			</div>
			<div className="header-right">
				<div className="header-info">
					<h4>Zuk tha boy</h4>
					<IconButton color="primary">
						<ExpandMoreIcon />
					</IconButton>
					<Avatar
						style={{ margin: "0 10px" }}
						alt="zuk"
						src="https://conteudo.imguol.com.br/c/noticias/bd/2018/09/03/o-ceo-do-facebook-mark-zuckerberg-ao-ser-questionado-no-capitolio-em-abril-sobre-a-falha-do-facebook-em-impedir-a-propagacao-do-discurso-de-odio-em-myanmar-1536017613993_v2_450x337.jpg"
					/>
				</div>
				<div className="header-right-options">
					<IconButton color="primary">
						<NotificationsActiveIcon />
					</IconButton>
					<IconButton color="primary">
						<ForumIcon />
					</IconButton>
					<IconButton color="primary">
						<AddIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};
export default Header;
