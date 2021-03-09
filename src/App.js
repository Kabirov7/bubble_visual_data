import './App.css';
import MyResponsiveBubble from "./Components/TRR";
import {ResponsiveBubble} from "@nivo/circle-packing";

function App() {
	let root = require("./bubble_data.json")
	return (
		<div className="App" style={{height: "900px", width: "100%"}}>
			<MyResponsiveBubble
				root={root}
			/>
		</div>
	);
}

export default App;
