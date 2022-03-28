import { Navigate, RouteProps } from 'react-router-dom';
import { AuthStatus } from '../../types/auth';
import Loader from '../loader/loader';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus,
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  switch (authStatus) {
    case AuthStatus.auth:
      return children;
    case AuthStatus.noAuth:
      return (<Navigate to="/login" />);
    default:
      return (<Loader />);
  }
}

export default PrivateRoute;
