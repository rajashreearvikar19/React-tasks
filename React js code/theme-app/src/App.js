import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './themeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> {/* Fixed trailing space */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
