import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop/shop-selectors';

import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preiview/collection-preview.component';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectioProps }) => (
            <CollectionPreview key={id} {...otherCollectioProps} />
        ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionOverview)