import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import * as constant from '../LandingScreen/constants/constant';
import * as utility from '../../assets/utility/utility';
import mapPropsToDispatch from '../../redux/connect/connect'
class ModalStart extends Component {
    constructor(props) {
        super(props)
        var appRef = document.getElementsByClassName('App')
        appRef[0].style.height = '100vh';
        this.state = {
            email: '',
            nickname: '',
            continueButtonEnabled: false
        }
    }


    handleParentClick = () => {
        this.props.startViewHandler()
    }

    handleChildClick = (event) => {
        event.stopPropagation();
    }
    emailHandler = (event) => {
        this.setState({ continueButtonEnabled: utility.emailVerifier(event.target.value) })
        if (this.state.continueButtonEnabled) {
            var inputDOM = document.getElementsByTagName('input')
            inputDOM[2].style.opacity = '1'
            this.setState({ email: event.target.value })
        }
    }
    nicknameHandler = (event) => {
        this.setState({ nickname: event.target.value })
    }
    reducerCaller = () => {
        this.props.datagetter(this.state.email, this.state.nickname)
        this.props.startViewHandler(true);
    }
    render() {

        return (
            <div className='ModalViewContainer' onClick={this.handleParentClick} >
                <div className='ModalView' onClick={this.handleChildClick}>
                    <h2 ><span className='CreateText'>Create Account</span></h2>
                    <div className='InnerContainer'>
                        <span className='SomeDetails'>Your email address is only used to send you important updates.
                            Your nickname is how other CryptoKitties
                            players will identify you.  </span>
                        <input type='email' placeholder='Your email address' onChange={this.emailHandler} />
                        <input type='text' placeholder='Nickname (optional)' onChange={this.nicknameHandler} />
                        <input type='submit' placeholder='Continue' value='Continue' disabled={!this.state.continueButtonEnabled} onClick={this.reducerCaller} />
                        <span className='SomeDetails' style={{ marginTop: '1rem', alignSelf: "flex-start", paddingLeft: "12px" }}>By signing up, you agree to our <strong className='Link'>Terms of Service</strong> and
                        <strong className='Link'> Privacy Policy</strong></span>
                    </div>
                </div>
            </div>

        )

    }
}


export default connect(null, mapPropsToDispatch)(ModalStart);