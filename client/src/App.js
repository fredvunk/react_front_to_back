import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar.js';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Avaleht from './components/Pages/Avaleht';
import Test from './components/To_do/Test';
import Naited from './components/Pages/Naited';
import Materjalid from './components/Pages/Materjalid';
import Mang from './components/Pages/Mang';
import Tagasiside from './components/Pages/Tagasiside';

class App extends Component {

    state = {
      sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }
        return (
            <div className="App" style={{height: '100%'}}>
                <Router>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler} />
                {backdrop}
                <Switch>
                    <Route exact path="/" component={Avaleht} />
                    <Route exact path="/test" component={Test} />
                    <Route exact path="/naited" component={Naited} />
                    <Route exact path="/materjalid" component={Materjalid} />
                    <Route exact path="/mang" component={Mang} />
                    <Route exact path="/tagasiside" component={Tagasiside} />
                </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
