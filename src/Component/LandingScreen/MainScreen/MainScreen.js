import React, { Component } from 'react';
import './styles.scss';
import Mainscreensidebanner from '../../../assets/images/mainscreensidebanner';
import Squaredisplay from '../../../assets/images/squaredisplayer';
import * as constant from '../../../assets/Constant/Constant';
export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countDownDate: new Date('june 1,2019 12:37:00'),
            time: '',
            now: new Date()
        }
    }
    componentDidMount() {

        setInterval(() => {
            var distance = this.state.countDownDate - this.state.now;
            var days = Math.floor((distance / (1000 * 60 * 60 * 24)) % 7)
            var hours = Math.floor(((distance / (1000 * 60 * 60)) % 24))
            var minutes = Math.floor(((distance / (1000 * 60)) % 60))
            var seconds = Math.floor((distance / 1000) % 60)
            this.setState({
                time: `${days}days ${hours}hours ${minutes}minutes ${seconds}seconds`,
                now: new Date()
            });
        }, 1000);
    }
    render() {
        return (
            <div className='OuterContainer'>
                <div class="Landing-stairs">
                    <Mainscreensidebanner />
                </div>
                <div class="Landing-window">
                    <Squaredisplay />
                </div>
                <div className='CryptoKittiesText-Landing-subheading-container'>
                    <h1 className='CryptoKittiesText' style={{ paddingTop: '2rem' }}>{constant.MAINSCREEN_TEXT.CRYPTOKITTIESTEXT}</h1>
                    <p className='Landing-subheading'>{constant.MAINSCREEN_TEXT.LANDING_SUBHEADING}</p>
                </div>
                <div className='Landing-fancies'>
                    <img className='Landing-fancies-front' src={constant.IMAGES.FANCIES_FRONT} />
                    <img className='Landing-fancies-mid' src={constant.IMAGES.FANCIES_MID} />
                    <img className="Landing-fancies-back" src={constant.IMAGES.FANCIES_BACK} alt="Fancy cats"></img>
                </div>
            </div>
        )

    }


}