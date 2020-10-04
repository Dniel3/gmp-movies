import * as React from 'react';
import './not_found.scss';
import { useHistory } from 'react-router';

const NotFound = 
    () => {
        const history = useHistory();

        const redirectHome = React.useCallback(() => {
            history.push("/");
        }, []);
        
        return <div className="not-found">
                <h5>PAGE NOT FOUND</h5>
                <h4>404</h4>
                <button onClick={redirectHome}>GO HOME</button>
            </div>;
    }

export default NotFound
