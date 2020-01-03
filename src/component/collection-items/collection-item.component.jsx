import React from 'react'

import '/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/collection-items/colection-item.styles.scss'

const CollectionItems = ({ name, price, imageUrl}) => {
    return (
        <div className='collection-item'>
            <div className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>AU${price}</span>
            </div>
            
        </div>
    )
}

export default CollectionItems
