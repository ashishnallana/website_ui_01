import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="font-['Open Sans'] font-[600]">
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
