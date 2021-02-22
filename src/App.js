import { BrowserRouter, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store"; //store -> index de reducer -> state del Reducer

import Signup from "./components/layouts/Signup";
import Login from "./components/layouts/Login";
import UsersOperation from "./components/layouts/UsersOperation";
import Main from "./components/layouts/Main";
import VehiclesOperation from "./components/layouts/VehiclesOperation";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/main/users" component={UsersOperation} />
        <Route exact path="/main/vehicles" component={VehiclesOperation} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
