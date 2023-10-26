/** @format */

import "./App.css"
import Loginmain from "./components/Login/Loginmain"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import Shop from "./components/Shop"
import Contact from "./components/Contact"

import AuthProvider from "./context/authContext"
import ProtectedRoute from "./components/ProtectedRoutes"

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<Router>
					<Routes>
						<Route path="/" element={<Loginmain />} />
						<Route path="*" element={<NotFound />} />
						<Route
							path="/dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/contact"
							element={
								<ProtectedRoute>
									<Contact />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/about"
							element={
								<ProtectedRoute>
									<About />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/shop"
							element={
								<ProtectedRoute>
									<Shop />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</Router>
			</div>
		</AuthProvider>
	)
}

export default App
