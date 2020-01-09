import React from 'react'
import CollectionPreview from "../../component/preview-collection/preview-collection.component"

import { selectCollectionForPreview} from "../../redux/shop/shop.selector"
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import '/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/collection-overview/collection-overview.styles.scss'

const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps }/>
                ))
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionForPreview
  })

export default connect(mapStateToProps)(CollectionOverview)
