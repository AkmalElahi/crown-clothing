import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updataCollections } from '../../redux/shop/shop.actions';

import './shop-page.styles.scss';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils'

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapShot = null
    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapShot => {
            const collections = convertCollectionsSnapShotToMap(snapShot)
            updateCollections(collections)
            this.setState({ loading: false })
        })
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => <CollectionOverviewWithSpinner isloading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isloading={loading} {...props} />} />

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updataCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage)