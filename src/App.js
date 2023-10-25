import "./App.css";
import Loginroute from "../src/components/Lolink";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <  Router>
  <Loginroute/>

      </Router>
    </div>
  );
}

export default App;
