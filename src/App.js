import { Route, Switch } from "react-router";
import GlobalStyle from "./styles/global"
import Home from "./pages/Home";
import "./App.css"
function App() {
  return (
    <>
    <GlobalStyle/>
    <Switch>
      <Route>
        <Home exact path = "/" />
      </Route>
    </Switch>
    </>
  )
}

export default App;
