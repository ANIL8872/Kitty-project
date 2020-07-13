import React, { Component } from 'react';
import './styles.scss';
import HeaderScreen from '../LandingScreen/HeaderScreen/HeaderScreen';
import MenuScreen from '../LandingScreen/MenuScreen/MenuScreen';
import * as constants from '../../assets/Constant/Constant';
import Timer from '../../assets/images/timer';
import Clock from '../../assets/images/clock';
export default class CattributeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: [78, 56, 343, 48, 51, 67, 78, 80, 9566],
            countDownDate: new Date('june 1,2019 12:37:00'),
            now: new Date(),
            time: '',
        }
    }
    componentDidMount() {
        setInterval(() => {
            var distance = this.state.countDownDate - this.state.now;
            var days = parseInt((distance / (1000 * 60 * 60 * 24)) % 7)
            var hours = parseInt(((distance / (1000 * 60 * 60)) % 24))
            var minutes = parseInt(((distance / (1000 * 60)) % 60))
            var seconds = parseInt((distance / 1000) % 60)
            this.setState({
                time: `${days}d ${hours}h ${minutes}m ${seconds}s`,
                now: new Date()
            });
        }, 1000);
    }
    render() {
        return (
            <div className='CattributeScreenOuterContainer'>
                <HeaderScreen />
                <MenuScreen />
                <div className='MainContentDiv'>
                    <p className='BackToCatalogue'>{constants.CATALOGUESCREEN_TEXT.BACK_TO_CATALOGUE}</p>
                    <p className='LatestCattributes'>{constants.CATALOGUESCREEN_TEXT.LATEST_CATTRIBUTE}</p>
                    <p className='PurchaseText'>{constants.CATALOGUESCREEN_TEXT.PURCHASE_TEXT}</p>
                    <p className='FileShareText'>{constants.CATALOGUESCREEN_TEXT.FILE_SHARE}</p>
                    <p className='Purrstige'>{constants.CATALOGUESCREEN_TEXT.PURRSTIGE} <span className='Timer'>{this.state.time}</span></p>
                    <div className='Container'>
                        {
                            this.state.index.map(
                                (elements) => {
                                    return (
                                        <div className='DetailOuterContainer'>
                                            <div className='DetailContainer'>
                                                <div className='BuyDiv'>
                                                    <img className='TagImage' src={require('../../assets/images/tag.svg')} />
                                                    <span className='DefaultText' style={{ color: '#82817d', fontWeight: "600" }}>{constants.CATALOGUESCREEN_TEXT.BUY}</span>
                                                    <span className='DefaultText'>{constants.CATALOGUESCREEN_TEXT.COST}</span>
                                                    <sup className='SuperText'>{constants.CATALOGUESCREEN_TEXT.ETH}</sup>
                                                </div>
                                                <img className='KittyImage' src={require('../../../src/assets/images/1598538.svg')} />
                                            </div>
                                            <p className='KittyNumberText'>#15672{elements}</p>
                                            <p className='Line'>.........................................</p>
                                            <Timer />
                                            <span className='GenText'>{constants.CATALOGUESCREEN_TEXT.GEN_15}</span>
                                            <span className='Clock'><Clock /></span>
                                            <span className='PloddingText'>{constants.CATALOGUESCREEN_TEXT.PLODDGING_TEXT}</span>
                                        </div>
                                    )
                                }
                            )
                        }


                    </div>
                </div>
            </div>
        )

    }

}