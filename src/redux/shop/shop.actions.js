import { ShopActionTypes } from './shop.types';

export const updataCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})