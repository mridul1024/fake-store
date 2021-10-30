import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import GlobalStyles from "./global-styles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={ProductListing}></Route>
          <Route
            path="/product/:productid"
            exact
            component={ProductDetails}
          ></Route>
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
