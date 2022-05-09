// import { Router, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./app.scss";
import Layout from "./layout/AuthLayout/Index";
import NonAuthLayout from "./layout/NonAuthLayout";
import UserAuthLogin from "./layout/UserAuthLogin/Index";
import AuthMiddleware from "./Routes/Middleware/AuthMiddleware";
import OpenRouteMiddleware from "./Routes/Middleware/OpenRouteMiddleware";
import { openRoute, privateRoute, userRoute } from "./Routes/Routes";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {openRoute.map((route, idx) => (
            <OpenRouteMiddleware
              exact
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
            />
          ))}
          {privateRoute.map((route, idx) => (
            <AuthMiddleware
              exact
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}{" "}
          {userRoute.map((route, idx) => (
            <AuthMiddleware
              exact
              path={route.path}
              layout={UserAuthLogin}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </Router>
      {/* <AdminMain /> */}
    </div>
  );
}

export default App;
