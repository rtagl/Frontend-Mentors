import { useState, useEffect } from 'react';
import { useFonts } from './context/FontContext';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
	const [definition, setDefinition] = useState('');

	const { font } = useFonts();

	useEffect(() => {
		fetchData('Keyboard');
	}, []);

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
				<div className="word flex justify-between items-center mb-3">
					<div className="flex flex-col">
						<span className="text-3xl font-bold text-gray-800 mb-1">
							{definition.word}
						</span>
						<span className="font-light text-purple-500">
							{definition.phonetic}
						</span>
					</div>
					<div>
						<button className="w-12 h-12">
							<img src="../assets/images/icon-play.svg" alt="" />
						</button>
					</div>
				</div>
				<div className="meaning">
					{definition.meanings &&
						definition.meanings.map((meaning) => (
							<div key={meaning.partOfSpeech}>
								{' '}
								{/* Added key here for React list rendering */}
								<div className="flex items-center space-x-2 text-lg mb-3">
									<div className="font-medium italic">
										{meaning.partOfSpeech}
									</div>
									<div className="flex-grow border-t border-gray-300"></div>
								</div>
								<ul className="list-disc list-inside">
									{meaning.definitions.slice(0, 3).map((definition, j) => (
										<li className="marker:text-purple-500 mb-6" key={j}>
											{definition.definition}
										</li>
									))}
									{meaning.synonyms.length > 0 ? (
										<div className="text-slate-500 mb-4">
											Synonyms: {''}
											{meaning.synonyms.map((synonym) => (
												<span key={synonym} className="text-purple-500">
													{synonym},{' '}
												</span>
											))}
										</div>
									) : null}
								</ul>
							</div>
						))}
					<div className="flex-grow border-t border-gray-300"></div>
					<div className="text-slate-800 text-xs">
						<p className="text-gray-500 mt-6 mb-2 underline underline-offset-4">
							Source
						</p>
						<div className="flex items-center">
							<a
								href={definition && definition.sourceUrls[0]}
								className="underline"
								target="_blank"
								rel="noopener noreferrer">
								{definition && definition.sourceUrls[0]}
							</a>
							<img
								className="ml-1"
								src="../assets/images/icon-new-window.svg"
								alt="new window"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;

// <div key={j} className="mb-6">
// 	<div className="">
// <div className="flex items-center space-x-2 text-lg mb-3">
// 	<div className="font-medium italic">
// 		{meaning.partOfSpeech}
// 	</div>
// 	<div className="flex-grow border-t border-gray-300"></div>
// </div>
// 		<p className="text-gray-800 ml-2">
// 			{meaning.definitions.definition}
// 		</p>
// 	</div>
// </div>;
