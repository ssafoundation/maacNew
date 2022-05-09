import jwtDecode from "jwt-decode";
import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  const { token, role } = useSelector((state) => ({
    token: state.Login.token,
    role: state.Login.role,
  }));
  let decode = null;
  if (!!token) {
    decode = jwtDecode(token);
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !token && !role && !decode) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default AuthMiddleware;
