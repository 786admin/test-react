var React = require('react');
var ReactDOM = require('react-dom');
var LoginComponent = require('./login');
var RegisterComponent = require('./register');
import { BrowserRouter, Route, Link, browserHistory } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter history={browserHistory}>
            <switch>
                <Route exact path={"/"} component={LoginComponent}></Route>
                <Route exact path={"/register"} component={RegisterComponent}></Route>
            </switch>
            </BrowserRouter>
        );
        
    }
}


ReactDOM.render(<App />,document.getElementById('base-page'));