import * as fromRecherche from '../actions/index';

export interface ParkState {
    parkList: object[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: ParkState = {
    parkList: [],
    loaded: false,
    loading: false
};

export function rechercheReducer(state = initialState, action: fromRecherche.ParksAction): any {
    switch (action.type) {
        case fromRecherche.LOAD_PARKS: {
            console.log(state);
            return { ...state, loading: true };
        }
    }
    return state;
}
