var React = require('react');
var Link = require('react-router-dom').Link;
require('./css/register.css');

class RegisterComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            newuser:{
               userid : "",
                email : "",
                password : "" 
            }
        }
    }
    render(){
        return(
            <form id='register-init' onSubmit={this.handleRegister.bind(this)}>
                <Link to="/" id="register-link">Login</Link>
                <h1 id="register-title">Register</h1>  
                <input type="text" required ref="userid" placeholder="userid"/>
                <input type="email" required ref="email" placeholder="email"/>
                <input type="password" required ref="password" placeholder="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                <input type="password" required ref="cpassword" placeholder="cpassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                <input type="submit" value="Register me." />
            </form>
        );
    }

    handleRegister(e){
        e.preventDefault();
        if(this.refs.password.value !== this.refs.cpassword.value)
        {
            alert('Both passwords do not match'); //html textbox error handling remaining
        }
        else{
            this.setState({
                newuser:{
                    userid : this.refs.userid.value,
                    email : this.refs.email.value,
                    password : this.refs.password.value
                }
            },this.processRegister().bind(this));
            
        }
    }

    processRegister(){
        fetch('http://127.0.0.1:5000/api/register',{ //replace with jquery
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(this.state.newuser)
        }).then(function(resp){
            return resp.json();
        }).then(function(data){
            //yet to add response handling. 
        });
    }
}

module.exports = RegisterComponent;