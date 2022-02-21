import { Navigate } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  authStatus: boolean,
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authStatus ? children : <Navigate to="/login" />
  );
}

export default PrivateRoute;
