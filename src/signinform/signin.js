import React from 'react';
import './signInForm.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
class SignInForm extends React.Component{

    state = 
    {
        userNameValue : '',
        passwordValue : '',
        verificationCOdeValue : ''
    }

    userName = (e) => {
        this.setState({
            userNameValue : e.target.value
        })
    } 
    password = (e) => {
        this.setState({
            passwordValue : e.target.value
        })
    } 
    verification = (e) => {
        this.setState({
            verificationCOdeValue : e.target.value
        })
    } 
    
    render() {
        return(
            <React.Fragment>
                <section className="SignIn">
                    <div className="SignInFormImage"></div>
                    <div className="SignInFormMainPageContent">
                        <form >

                    <h2>Sign in to the freeSpeak</h2>
                            <div classname="signInFormInsideDivision">
                                <div className="signInUserNameDiv">
                                <Icon name="user" color="grey" style={{opacity:"0.7"}} ></Icon>
                                    <input type="text" 
                                        className="signInUserName"
                                        placeholder="username" 
                                        value={this.state.userNameValue} 
                                        onChange={this.userName}/> 
                                </div>
                                    <hr></hr>
                                <div className="signInPasswordDiv">
                                    <Icon name="lock" color="grey" style={{opacity:"0.7"}}></Icon>
                                    <input type="password" 
                                        className="signInPassword"
                                        placeholder="password" 
                                        value={this.state.passwordValue} 
                                        onChange={this.password}/> 
                                </div>    
                                    <hr></hr> 
                                <div className="signInVerifyDiv">
                                    <input type="text" 
                                        className="signInVerification" 
                                        placeholder="verification code" 
                                        value={this.state.verificationCOdeValue} 
                                        onChange={this.verification}/>
                                    <input type="text" className="verify" value="4678"/>
                                </div>
                                    <hr></hr>
                                <div className="signInFormEndProcess">
                                <input type="button" value="log in" className="loginButton"/> 
                                <span>forgot?</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


export default SignInForm;
