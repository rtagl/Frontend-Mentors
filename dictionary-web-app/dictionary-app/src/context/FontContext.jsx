import { createContext, useContext, useState } from 'react';

const FontContext = createContext();

export const useFonts = () => useContext(FontContext);

export const FontProvider = ({ children }) => {
	const [font, setFont] = useState('Sans Serif');

	return (
		<FontContext.Provider value={{ font, setFont }}>
			{children}
		</FontContext.Provider>
	);
};
