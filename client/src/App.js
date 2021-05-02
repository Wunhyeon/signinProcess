import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={() => <Main />} />
        <Route path="/signin" render={() => <Signin />} />
        <Route path="/signup" render={() => <Signup />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
