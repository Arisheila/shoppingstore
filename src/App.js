/** @format */

import "./App.css"
import Loginmain from "./components/Login/Loginmain"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Dashboard from "./components/Dashboard"

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Loginmain />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
