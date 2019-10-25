import * as fromRecherche from '../actions/index';
import { allParksService } from '../../service/allparks.service';

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

export function rechercheReducer(state = initialState, action: fromRecherche.ParksAction) {
    switch (action.type) {
        case fromRecherche.LOAD_PARKS: {
            const parkList = action.payload;
            console.log(parkList);
            return { ...state, loading: true };
        }
    }
    return state;
}

export const getParks = (state: ParkState) => state.parkList;
