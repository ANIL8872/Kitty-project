import React, { Component } from 'react';
import './styles.scss';
import ModalStart from '../../ModalStart/ModalStart';
import GameModal from '../../GameModal/GameModal';
import CatalogueMenu from '../CatalogueMenu/CatalogueMenu';
import { connect } from 'react-redux'
import * as constant from '../../../assets/Constant/Constant';
import { withRouter } from 'react-router-dom';

let { CATALOGUE, DOWNARROW, SEARCH_ICON, GUIDE_ICON, MORE_ICONS } = constant.IMAGES;

class MenuScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startView: false,
            catalogueMenuViewer: false,
            menuContent: [{
                leftImage: CATALOGUE, name: 'Catalogue',
                dropDownList: [
                    'Cattribute', 'Fancy Cats', 'Exclusive Cats',
                    ' Special Cats'
                ]
            }, {
                leftImage: SEARCH_ICON, name: "Search", dropDownList: [
                    'For Sale', 'Siring', 'All Cats'
                ]
            }, {
                leftImage: GUIDE_ICON, name: "Guide", dropDownList: [
                    'Kitten Class', 'Getting', 'Gas and Fees',
                    'Types of Cats'
                ]
            }, {
                leftImage: MORE_ICONS, name: "More", dropDownList: [
                    'Blog', 'About', 'Events',
                    'Newsletter', 'KittVerse'
                ]
            }]
        }
    }
    startViewHandler = (value) => {
        var appRef = document.getElementsByClassName('App')
        appRef[0].style.height = '100%';
        this.setState({ startView: value })
    }

    logoChanger(value) {
        var classTaker = document.getElementsByClassName('logo')
        if (value) {
            classTaker[0].style.backgroundSize = '100%';
            classTaker[0].style.backgroundImage = `url(${constant.IMAGES.LOGO_HOVER})`

        } else {
            classTaker[0].style.backgroundImage = ``;
        }
    }
    displayOn = () => {
        var DOMDropDownList = document.getElementsByClassName('NavContainer')
        console.log(DOMDropDownList)
    }
    render() {
        return (
            <>
                {this.state.startView &&
                    (this.props.reducerData.email ?
                        <GameModal startView={this.state.startView} startViewHandler={this.startViewHandler} /> :
                        <ModalStart startView={this.state.startView} startViewHandler={this.startViewHandler} />)}
                <div className='MenuOuterContainer'>
                    <header className='MenuContainer'>
                        <div className='SideLink' onMouseOver={() => { this.logoChanger(true) }} onMouseLeave={() => { this.logoChanger(false) }}>
                            <span className='logo' ></span>
                            <h1 className='headerText'>CryptoKitties</h1>
                        </div>
                        <div className='WalletContainer'>
                            <span className='WalletSymbol'></span>
                            <span className='WalletText' style={{ marginLeft: '5px', fontSize: 'default' }}>No wallet</span>
                        </div>
                    </header>
                    <nav className='NavContainer'>
                        {
                            this.state.menuContent.map(
                                (element) => {
                                    return (
                                        <div className='DropDownListContainer' >
                                            <div className='FirstMenuContainer'>
                                                {element.leftImage}
                                                <p onClick={() => { this.props.history.push('/Cattribute') }}>{element.name}</p>
                                                {DOWNARROW}
                                            </div>
                                            <div className='DropDownList'>
                                                {element.dropDownList.map(
                                                    (item) => {
                                                        return (
                                                            <p className='ItemText'>{item}</p>)
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                        <div className='ButtonContainer' onClick={this.startViewHandler}><button className='StartButton'><p className='ButtonName'>Start</p></button>
                        </div>
                    </nav>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        reducerData: state
    }
}

export default withRouter(connect(mapStateToProps, null)(MenuScreen))