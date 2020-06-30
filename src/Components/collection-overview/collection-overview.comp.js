import React from 'react'

//Styles
import './collection-overview.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.comp'
import {selectCollections} from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))
    }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);    