import React, { Component } from 'react';
import './styles.scss';
import * as constant from '../../../assets/Constant/Constant';
export default class InformationDiv extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='InformationDivContainer'>
                <div className='InformationDiv'>
                    <div className='OwnKittyContainer'><button id='OwnKitty'>Get your own Kitty</button></div>
                    <div className='InfoDiv1'>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.COINS} /><p>{constant.INFORMATIONDIV_TEXT.FIRST}</p></div>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.GIFT} /><p >{constant.INFORMATIONDIV_TEXT.SECOND}</p></div>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.EGG_PLANT} /><p >{constant.INFORMATIONDIV_TEXT.THIRD}</p></div>
                    </div>
                    <div className='InfoDiv1'>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.PUZZLES} /><p >{constant.INFORMATIONDIV_TEXT.FOURTH}</p></div>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.EGG_CRACK} /><p>{constant.INFORMATIONDIV_TEXT.FIVTH}</p></div>
                        <div className='ListContainer'><img className='Icons' src={constant.IMAGES.GAMES} /><p>{constant.INFORMATIONDIV_TEXT.SIXTH}</p></div>
                    </div>
                </div>
            </div>
        )

    }

}