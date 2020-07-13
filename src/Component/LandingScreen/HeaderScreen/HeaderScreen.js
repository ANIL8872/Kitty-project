import React, { Component } from 'react';
import './styles.scss';
import * as constant from '../../../assets/Constant/Constant'

export default class HeaderScreen extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='HeaderContainer' style={{ backgroundImage: `url(${constant.IMAGES.BG_BANNER})` }}>
                <h2 className='HeaderText'><strong className='Strongtext' >Dapper</strong> is here! Breed the new Fancy,
                <strong className='Strongtext' > Curdlin</strong>, and other Kitties with Dapper and win Exclusive Cats in
                <strong className='Strongtext' > Leaderboard Tournaments</strong>.</h2>
            </div>

        )
    }

}