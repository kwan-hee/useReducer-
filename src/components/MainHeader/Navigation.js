import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
    return (
        <div>
            <nav className={classes.nav}>
                <ul>
                    {props.isLoggedIn && (
                        <li>
                            <a herf="/">Users</a>
                        </li>
                    )}
                    {props.isLoggedIn && (
                        <li>
                            <a herf="/">Admin</a>
                        </li>
                    )}
                    {props.isLoggedIn && (
                        <li>
                            <button onClick={props.onLogout}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
