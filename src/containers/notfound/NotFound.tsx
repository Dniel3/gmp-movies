import * as React from 'react';
import './NotFound.scss';
import { useHistory } from 'react-router';

export default function NotFound() {
  const history = useHistory();

  const redirectHome = React.useCallback(() => {
    history.push('/');
  }, []);

  return (
    <div className="not-found">
      <h5>PAGE NOT FOUND</h5>
      <h4>404</h4>
      <button type="button" onClick={redirectHome}>GO HOME</button>
    </div>
  );
}
