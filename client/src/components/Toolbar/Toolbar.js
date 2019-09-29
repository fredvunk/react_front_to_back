import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { NavLink } from 'react-router-dom';
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><img src={'/img/logo.svg'} className="App-logo" alt="" /></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><NavLink activeClassName="active" to="/">Avaleht</NavLink></li>
                    <li><NavLink activeClassName="active" to="/test">To do</NavLink></li>
                    <li><NavLink activeClassName="active" to="/naited">Näited</NavLink></li>
                    <li><NavLink activeClassName="active" to="/materjalid">Materjalid</NavLink></li>
                    <li><NavLink activeClassName="active" to="/mang">Mäng</NavLink></li>
                    <li><NavLink activeClassName="active" to="/tagasiside">Tagasiside</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;