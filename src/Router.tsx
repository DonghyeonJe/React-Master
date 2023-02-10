import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/:coinId"}>
          <Coin />
        </Route>

        <Route path={process.env.PUBLIC_URL + "/"}>
          <Coins />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
