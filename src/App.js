import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import Leftbar from "./components/leftbar/Leftbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Leftbar />
				<Update />
				<Rightbar />
			</div>
		</>
	);
}

export default App;
