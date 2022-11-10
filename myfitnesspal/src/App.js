import './App.css';
import Footer from './Components/Footer/Footer';
import DisplayInfo from './Components/HomePage/DisplayInfo';
import DisplayInfo2 from './Components/HomePage/DisplayInfo2';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <DisplayInfo/>
      <DisplayInfo2/>
      <Footer/>
    </div>
  );
}

export default App;
