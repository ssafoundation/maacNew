// import jwtDecode from 'jwt-decode';
import React from "react";
import { Route } from "react-router-dom";

const OpenRouteMiddleware = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  // const { token } = useSelector((state) => ({
  //   token: state.Login.token,
  // }));
  // console.log(
  //   `file: AuthMiddleware.js ~ line 14 ~ const{token}=useSelector ~ token`,
  //   jwtDecode(token)
  // );
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default OpenRouteMiddleware;
