import "./App.css";
import DisplayInfo from "./Components/HomePage/DisplayInfo";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import { useState, createContext } from "react";
import Myhome from "./Components/MyDashboard/Myhome";
import Myapps from "./Components/MyDashboard/Myapps";

const context = createContext();

function App() {
  const [signup, setSignup] = useState({});
  console.log("User", signup);

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<DisplayInfo />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/Signup"} element={<Signup />} />
        <Route path={"/home"} element={<Myhome />} />
        <Route path={"/apps"} element={<Myapps />} />
      </Routes>
      {/* <context.Provider value={{ signup, setSignup }}>
        <Signup/>
      </context.Provider> */}
    </div>
  );
}

export default App;
// export {context};
