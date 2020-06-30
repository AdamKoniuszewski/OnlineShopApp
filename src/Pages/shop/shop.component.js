import React from 'react';
import { Route } from 'react-router-dom'
import CollectionPage from '../CollectionPage/CollectionPage.comp'
import CollectionOverview from '../../Components/collection-overview/collection-overview.comp'

const ShopPage = ({match}) =>  {
    console.log(match);
    return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
};



export default ShopPage;