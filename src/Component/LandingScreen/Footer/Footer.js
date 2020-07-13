import React, { Component } from 'react';
import './styles.scss';
import * as constant from '../../../assets/Constant/Constant';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftMostContent: ['My Profile', 'Activity', 'Search', 'KittyVerse', 'FAQs', `Player's Guide`, 'Email us'],
            leftContent: ['About', 'Press', 'Tech details', 'White Pa-purr', 'Latest update', 'Our Newsletter']
        }
    }
    render() {
        return (
            <footer className='FooterContainer'>
                <div className='FooterInnerContainer'>
                    <ul className='ContentClass'>
                        {this.state.leftMostContent.map(
                            (item) => {
                                return (
                                    <li>{item}</li>)
                            }
                        )}
                    </ul>
                    <ul className='ContentClass'>
                        {this.state.leftContent.map(
                            (item) => {
                                return (
                                    <li>{item}</li>
                                )
                            }
                        )}

                    </ul>
                    <ul className='ContentClass'>
                        <li style={{ color: '#3a5998' }}>Facebook</li>
                        <li style={{ color: '#fd4404' }}>Reddit</li>
                        <li style={{ color: '#1ba1f3' }}>Twitter</li>
                        <li style={{ color: '#FF0000' }}>YouTube</li>
                        <li style={{ color: '#8b2ab7' }}>Instagram</li>
                        <li style={{ color: '#2789da' }}>Discort</li>
                        <li style={{ color: '#6441a4' }}>Twitch</li>
                    </ul>
                    <ul className='SpecialOptionClass' style={{ textAlign: 'right' }}>
                        <li className='SpecialOptions'>{constant.FOOTER_TEXT.SPECIALOPTIONS} <a href className='StrongText'>{constant.FOOTER_TEXT.DAPPER_LABS}</a></li>
                        <li className='SpecialOptions'>View our <a href className='StrongText'>job Openings</a></li>
                    </ul>
                </div>
                <div className='SecondaryFooter'>
                    <a href>Terms of use</a>
                    <a href>Privacy policy</a>
                </div>
            </footer>
        )

    }

}