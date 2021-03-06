import "./not-found.scss";
import Scarecrow from "../images/Scarecrow.png";

const NotFound = () => {
	return (
		<>
			<header>
				<h3 className="not-found__title">404 not found</h3>
			</header>
			<div className="not-found__container">
				<img src={Scarecrow} alt="Scarecrow" className="img" />
				<div className="description">
					<h1 className="heading">I have bad news for you</h1>
					<p className="info">The page you are looking for might be removed or is temporarily unavailable</p>
					<button className="back">back to homepage</button>
				</div>
			</div>
			<footer>
				<p className="not-found__created-by">created by Razeen Shaikh - devChallenges.io</p>
			</footer>
		</>
	)
}

export default NotFound