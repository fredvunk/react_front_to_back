import React from 'react';
import './SideDrawer.css';
import { NavLink } from "react-router-dom";

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><NavLink activeClassName="active" to="/" onClick={props.click}>Avaleht</NavLink></li>
                <li><NavLink activeClassName="active" to="/test" onClick={props.click}>To do</NavLink></li>
                <li><NavLink activeClassName="active" to="/naited" onClick={props.click}>Näited</NavLink></li>
                <li><NavLink activeClassName="active" to="/materjalid" onClick={props.click}>Materjalid</NavLink></li>
                <li><NavLink activeClassName="active" to="/mang" onClick={props.click}>Mäng</NavLink></li>
                <li><NavLink activeClassName="active" to="/tagasiside" onClick={props.click}>Tagasiside</NavLink></li>
            </ul>
        </nav>
    );
};
export default sideDrawer;
