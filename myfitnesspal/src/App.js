import "./App.css";
import Footer from "./Components/Footer/Footer";
import DisplayInfo from "./Components/HomePage/DisplayInfo";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<DisplayInfo />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Signup"} element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
