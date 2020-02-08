import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'
import CollectionPreview from '../collection-preiview/collection-preview.component';
import './collection-overview.styles.scss'
const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectioProps }) => (
            <CollectionPreview key={id} {...otherCollectioProps} />
        ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionOverview);
