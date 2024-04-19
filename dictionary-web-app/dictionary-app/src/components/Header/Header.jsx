import { useState } from 'react';
import './Header.css';
import Dropdown from './Dropdown/Dropdown';

const Header = () => {
	const [isToggled, setIsToggled] = useState(false);

	const handleToggleLightMode = () => {
		setIsToggled(!isToggled);
	};

	return (
		<div className="flex items-center mb-8 justify-between">
			<img className="" src="../../assets/images/logo.svg" alt="logo" />
			<div className="flex">
				<Dropdown />
				<div className="h-6 w-px bg-slate-300"></div>
				<div className="flex">
					<div
						onClick={handleToggleLightMode}
						className="toggle-container w-12 h-6 bg-slate-400 rounded-full mx-2 relative cursor-pointer">
						<div
							className={`toggle-circle w-5 h-5 bg-white rounded-full absolute transition duration-300 ease-in-out ${
								isToggled ? 'toggle-right' : ''
							}`}></div>
					</div>
					<img src="../../assets/images/icon-moon.svg" alt="moon" />
				</div>
			</div>
		</div>
	);
};

export default Header;
