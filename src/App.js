import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import LoadingSkeleton from "./components/LoadingSkeleton";
import "./css/App.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<Form />
			<Result />
			<LoadingSkeleton />
		</div>
	);
}
