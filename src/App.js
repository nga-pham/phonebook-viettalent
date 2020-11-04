import "./App.css";
import { Provider } from "react-redux";
import store from "../src/data/store";
import NavBar from "./view/NavBar";
import MainBody from "./view/MainBody";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavBar />
          </div>
        </div>
        <div className="row">
          <MainBody />
        </div>
      </div>
    </div>
  );
}

export default App;
