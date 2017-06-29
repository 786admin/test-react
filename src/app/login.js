var React = require('react');
var Link = require('react-router-dom').Link;
require('./css/login.css');

class LoginComponent extends React.Component{

    constructor(){ // Constructor to initialize form variables.
        super();
        this.state ={
            user:{
                userid : "",
                password : ""
            }
                
        }

    }

    render(){ // Yet to beautify using CSS
    return(
        
        <form id="login-init" onSubmit={this.handleSubmit.bind(this)}>
                <Link to="/register" id="link">Register</Link>
                <h1 id="login-title">Login</h1>  
                <input type="text" required ref="userid" placeholder="userid"/>
                <input type="password" required ref="password" placeholder="password"/>
                <input type="submit" value="Let me in." />
        </form>
    );
}
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            user:{
                userid : this.refs.userid.value,
                password : this.refs.password.value
            }  
        },this.processlogin.bind(this));
    }

    processlogin(){
        fetch('http://127.0.0.1:5000/api/login',{ //replace with jquery
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(this.state.user)
        }).then(function(resp){
            return resp.json();
        }).then(function(data){
            if(data.auth) alert("Login success");
            else alert("Invalid credentials");
        });
    }
}


module.exports = LoginComponent;