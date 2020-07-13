import React, { Component } from 'react';
import './styles.scss';
import { withRouter } from 'react-router-dom';


class CatalogueMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ['Cattributes', 'Fancy Cats', 'Exclusive Cats', 'Special Edition', 'anil'],
        }
    }
    CataloguedivHover(value) {
        var DOMofCataloguediv = document.getElementsByClassName('FirstMenuContainer')
        if (value == 'MouseOver') {
            DOMofCataloguediv[0].style.color = 'black';
            DOMofCataloguediv[0].style.stroke = 'black';
        }
        else {
            DOMofCataloguediv[0].style.color = '';
            DOMofCataloguediv[0].style.stroke = '';
        }
    }
    render() {
        return (
            <div className='CatalogueMenu'>
                {this.state.item.map(
                    (elements) => {
                        return (
                            <div className='MenuContent' onMouseOver={() => { this.CataloguedivHover('MouseOver') }} onMouseLeave={() => { this.CataloguedivHover('MouseLeave') }}>
                                <p onClick={() => { this.props.history.push('/Cattribute') }}>{elements}</p>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}

export default withRouter(CatalogueMenu);