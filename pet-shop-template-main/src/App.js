import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import GlobalContext from "./GlobalContext";

function App() {
  return (
    <div>
    <GlobalContext.Provider
        value={2}
      ><NavBar />
      <Home />
    </GlobalContext.Provider>
      
    </div>
  );
}

export default App;
