import { useState } from 'react';
import { useFonts } from './context/FontContext';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	const [definition, setDefinition] = useState('');

	const { font } = useFonts();

	const fetchData = (searchTerm) => {
		fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchTerm}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data[0]);
				setDefinition(data[0]);
			});
	};

	return (
		<>
			<div className="container p-6" style={{ fontFamily: font }}>
				<Header />
				<SearchBar fetchData={fetchData} />
				<div className="word">
					<span className="text-3xl">{definition.word}</span>
				</div>
			</div>
		</>
	);
}

export default App;
