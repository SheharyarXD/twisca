import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import LoginPage from './components/loginsignup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage showLogin={true} />} />
      <Route path="/signup" element={<LoginPage showLogin={false} />} />
    </Routes>
  </Router>
  );
}

export default App;
