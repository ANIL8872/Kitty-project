import React, { Component } from 'react';
import './styles.scss';
import * as constant from '../../../assets/Constant/Constant';
export default class CryptoKittiesDetails extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='CryptoKittiesDetailsOuterContainer'>
                <div className='CryptoKittiesDetailsInnerContainer'>
                    <div className='KittyDiv'>
                    </div>
                    <div className='KittyDiscription'>
                        <h1 className='Header'>{constant.CRYPTOKITTIESDETAILS_TEXT.WHAT_IS_CRYPTOKITTIESDETAILS}
                        </h1>
                        <p className='Discription'>
                            {constant.CRYPTOKITTIESDETAILS_TEXT.DISCRIPTION}
                        </p>
                    </div>
                </div>

            </div>

        )

    }

}