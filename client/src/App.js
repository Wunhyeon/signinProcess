import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { useState } from "react";
import AdminAllUser from "./pages/AdminAllUser";
import GetMyPaper from "./pages/GetMyPaper";
import WriteBoard from "./pages/WriteBoard";
import GetAllPaper from "./pages/GetAllPaper";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [laveling, setLaveling] = useState();
  const [accessToken, setAccessToken] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Header isLogin={isLogin} laveling={laveling} />
        <Route exact path="/" render={() => <Main />} />
        <Route
          path="/signin"
          render={() => (
            <Signin
              setIsLogin={setIsLogin}
              setLaveling={setLaveling}
              setAccessToken={setAccessToken}
            />
          )}
        />
        <Route path="/signup" render={() => <Signup />} />
        <Route
          path="/admin/allUser"
          render={() => <AdminAllUser accessToken={accessToken} />}
        />
        <Route
          path="/admin/allPaper"
          render={() => <GetAllPaper accessToken={accessToken} />}
        />

        <Route
          path="/company/getMyPaper"
          render={() => <GetMyPaper accessToken={accessToken} />}
        />
        <Route
          path="/writeBoard"
          render={() => <WriteBoard accessToken={accessToken} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
