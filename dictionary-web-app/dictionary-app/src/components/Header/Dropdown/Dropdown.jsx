import { useFonts } from '../../../context/FontContext';
import './Dropdown.css';

export default function FontSelector() {
	const { setFont } = useFonts();
	const handleFontChange = (e) => {
		const styleMap = {
			'Sans Serif': 'Inter',
			Serif: 'Laro',
			Mono: 'Inconsolata',
		};
		setFont(styleMap[e.target.value]);
	};
	return (
		<div className="select-container">
			<select className="" onChange={handleFontChange}>
				<option value="Sans Serif">Sans Serif</option>
				<option value="Serif">Serif</option>
				<option value="Mono">Mono</option>
			</select>
			<img src="../../../../assets/images/icon-arrow-down.svg" alt="moon" />
		</div>
	);
}
