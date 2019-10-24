import * as fromRecherche from './recherche.reducers';

import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
    parks: fromRecherche.ParkState;
}

export const reducers: ActionReducerMap<ProductState> = {
    parks: fromRecherche.rechercheReducer
};
