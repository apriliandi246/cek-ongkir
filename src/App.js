import Form from "./components/Form";
import Header from "./components/Header";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ResultContainer from "./components/ResultContainer";
import "./css/App.css";

export default function App() {
	return (
		<div className="container">
			<Header />
			<Form />
			<ResultContainer />
			<LoadingSkeleton />
		</div>
	);
}
