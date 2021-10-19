import { Redirect, Route } from "react-router";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user.displayName ? children : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
