// MODULES
import React, { useState } from 'react';
import { Switch, Route, withRouter, useHistory } from 'react-router-dom';

// COMPONENTS
import Register from './Pages/Register';
import Lobby from './Pages/Lobby';
import Gameplay from './Pages/Gameplay'

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" component={Register} exact />
                <Route path='/lobby/:key/:user' component={Lobby} />
                <Route path='/gameplay/:table/:key' component={Gameplay} />
            </Switch>
        </div>
    );
}

export default withRouter(App);
