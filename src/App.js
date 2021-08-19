import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header1 from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Home_2 from "./components/Home_2";
import Setting from "./components/Setting"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header1 /> */}
        <Sidebar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home_2">
            <Home_2 />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
