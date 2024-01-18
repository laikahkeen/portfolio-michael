import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Projects, Contact } from "./pages";
import { useEffect } from "react";

const ScrollToTop = () => {
	// Extracts pathname property(key) from an object
	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [pathname]);
};

const App = () => {
	return (
		<main className='bg-slate-300/20 min-h-[100vh]'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/about'
						element={<About />}
					/>
					<Route
						path='/projects'
						element={<Projects />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>
				</Routes>
			</Router>
		</main>
	);
};

export default App;
