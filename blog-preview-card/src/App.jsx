import './App.css';
import illustrationArticle from './assets/images/illustration-article.svg';

function App() {
	return (
		<div className="card">
			<img
				className="illustration"
				src={illustrationArticle}
				alt="illustration article"
			/>
			<div className="content">
				<div className="category figtree-medium-14">Learning</div>
				<p className="figtree-medium-14">Published 21 Dec 2023</p>
				<p className="headline figtree-extra-bold">HTML & CSS foundations</p>
				<p className="description figtree-medium-16">
					These languages are the backbone of every website, defining structure,
					content and presentation.
				</p>
			</div>
			<div className="author">
				<img
					className="avatar"
					src="/src/assets/images/image-avatar.webp"
					alt="avatar"
				/>
				<p className="figtree-medium-14">Greg Hooper</p>
			</div>
		</div>
	);
}

export default App;
