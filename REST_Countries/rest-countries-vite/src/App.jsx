import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch('../data.json');
			const data = await response.json();
			setCountries(data);
		}
		fetchData();
	}, []);

	console.log(countries);

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="countries">
					{countries.map((country) => {
						return (
							<div key={country.name} className="country-card">
								<img className="country-flag" src={country.flag} alt={`${country.name} flag`} />
								<h1>{country.name}</h1>
								<p>{country.population}</p>
								<p>{country.region}</p>
								<p>{country.capital}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
