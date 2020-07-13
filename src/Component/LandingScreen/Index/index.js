import React, { Component } from 'react';
import HeaderScreen from '../HeaderScreen/HeaderScreen';
import MenuScreen from '../MenuScreen/MenuScreen';
import MainScreen from '../MainScreen/MainScreen';
import InformationDiv from '../InformationDiv/InformationDiv';
import CryptoKittiesDetails from '../CryptoKittiesDetails/CryptoKittiesDetails';
import * as constant from '../../../assets/Constant/Constant';
import Footer from '../Footer/Footer';
import './styles.scss';
export default class Index extends Component {
    constructor(props) {
        super(props)
    }
    displayOn = () => {
        var DOMMessage = document.getElementsByClassName('Message')
        DOMMessage[0].style.Zindex = '1';
        var DOMMessageHover = document.getElementsByClassName('MessageHover')
        DOMMessageHover[0].style.display = 'flex'
        var DOMMessageImage = document.getElementsByClassName('MessageImage')
        DOMMessageImage[0].style.display = 'flex'
    }
    displayOff = () => {
        var DOMMessage = document.getElementsByClassName('Message')
        DOMMessage[0].style.Zindex = '3';
        var DOMMessageImage = document.getElementsByClassName('MessageImage')
        DOMMessageImage[0].style.display = 'none'
        var DOMMessageHover = document.getElementsByClassName('MessageHover')
        DOMMessageHover[0].style.display = 'none'
    }
    render() {
        return (
            <div className="App">
                <HeaderScreen />
                <MenuScreen />
                <MainScreen />
                <InformationDiv />
                <CryptoKittiesDetails />
                <Footer />
                <img className='Message' src={constant.IMAGES.MESSAGE} onMouseOver={this.displayOn} />
                {/* <div className='HoverContainer'> */}
                {/* <img className='DiscordImage' src={require('../../../assets/images/icon-discord-white.svg')} />
                    <div className='Message'>
                        <span>Take to us on</span><strong>Discord</strong>
                    </div>
                    <div className='RightDiv'>
                    </div> */}
            {/* </div> */}
            </ div >

        )
    }
}