import './App.css';
import { useState } from "react";
import Navbar from './componenets/Navbar';
import Textform from './componenets/Textform';
import Alert from "./componenets/Alert";
import About from './componenets/About';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
// import Switch from 'react-switch';
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const ShowAlert = (msg, type) => {
    setalert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      ShowAlert("dark mode has been activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("light mode has been activated", "success");
    }
  };
  return (
    <>
    <Router>
    <Navbar tittle="TextEditor" mode={mode} toglemode={toglemode} />
    <Alert alert={alert}></Alert>
    <div className="container">
    <Routes>
          <Route path="/about"
            element={<About />}>
          </Route>
          <Route path="/" element={
            <Textform ShowAlert={ShowAlert} heading="Enter your text to analyze below" m={mode}/>}>
          </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
