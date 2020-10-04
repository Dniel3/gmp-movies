import * as React from 'react';
import './logo.scss';
import { useHistory } from 'react-router';

const Logo = () => {
    const history = useHistory();

    const redirectHome = React.useCallback(() => {
        history.push('/');
    }, []);

    return <div onClick={redirectHome} className="logo"><strong>netflix</strong>roulet</div>;
}

export default Logo
