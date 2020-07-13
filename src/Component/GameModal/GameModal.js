import React, { Component } from 'react';
import './styles.scss';
import * as constant from '../../assets/Constant/Constant';

export default class GameScreen extends Component {
    constructor(props) {
        super(props)
        var appRef = document.getElementsByClassName('App')
        appRef[0].style.height = '100vh';
    }
    handleParentClick = () => {
        this.props.startViewHandler()
    }

    handleChildClick = (event) => {
        event.stopPropagation();
    }
    render() {
        return (
            <div className='GameModalContainer' onClick={this.handleParentClick} >
                <div className='GameModal' onClick={this.handleChildClick}>
                    <div className='UpperContainer'>
                        <div>
                            <h2 className='TextWanna'>{constant.GAMEMODAL_TEXT.GAMEMODALH2}</h2>
                            <p className='SafePlaceText'>{constant.GAMEMODAL_TEXT.SAFEPLACETEXT}</p>
                        </div>
                        <div className='DoneButtonOuterContainer'>
                            <button id='DoneButton' onClick={this.handleParentClick}><span className='DoneSpan'>Done</span></button>
                        </div>
                    </div>
                    <div className='LowerUpperContainer'>
                        <div className='LowerContainer'>
                            <img className='BrowserDapperImage' src={constant.IMAGES.BROWSER_DAPPER} />
                            <p className='BelowImageText'>{constant.GAMEMODAL_TEXT.BELOWIMAGETEXT}</p>
                            <button className='GetFromChromeWebStore'><span className='GetFromChromeWebStoreSpan'>{constant.GAMEMODAL_TEXT.GETFROMCHROMEWEB}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }

}