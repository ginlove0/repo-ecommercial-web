import React from 'react'

import '../cart-icon/cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag-icon.svg'

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)