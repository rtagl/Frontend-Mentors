import darkModeMoon from '/darkmodemoon.svg';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">Where in the world?</div>
			<div className="color-mode">
				<img src={darkModeMoon} />
				<div>Dark Mode</div>
			</div>
		</div>
	);
};

export default Navbar;
