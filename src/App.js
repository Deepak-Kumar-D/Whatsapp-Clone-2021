import "./css/App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Router>
            {/* Sidebar */}
            <Sidebar />

            <Switch>
              <Route path="/rooms/:roomId">
                {/* Chatbar  */}
                <Chat />
              </Route>

              <Route path="/">
                {/* Chatbar  */}
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
