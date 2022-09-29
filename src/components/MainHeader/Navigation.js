import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = () => {
    const ctx = useContext(AuthContext);

    return (
        <div>
            <nav className={classes.nav}>
                <ul>
                    {ctx.isLoggedIn && (
                        <li>
                            <a herf="/">Users</a>
                        </li>
                    )}
                    {ctx.isLoggedIn && (
                        <li>
                            <a herf="/">Admin</a>
                        </li>
                    )}
                    {ctx.isLoggedIn && (
                        <li>
                            <button onClick={ctx.onLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
