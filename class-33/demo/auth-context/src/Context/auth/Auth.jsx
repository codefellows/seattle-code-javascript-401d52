import { useContext } from 'react';
import { AuthContext } from './index';

function Auth({ capability, children }) {

  const { can } = useContext(AuthContext);

  return can(capability) ? <>{children}</> : null;
}

export default Auth;

