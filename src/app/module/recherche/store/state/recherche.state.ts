import { State, Selector, Action, StateContext } from '@ngxs/store';
import { GetParks } from '../actions/recherche.actions';
import { AllParksService } from '../../service/allparks.service';
import { tap } from 'rxjs/operators';
import { state } from '@angular/animations';

export class RechercheStateModel {
    loading: boolean;
    loaded: boolean;
    parks: [];
}
@State<RechercheStateModel>({
    name: 'allParks',
    defaults: {
        loading: false,
        loaded: false,
        parks: []
    }
})
export class RechercheState {
    constructor(private allParksService: AllParksService) {}

    @Selector()
    static getAllParks(state: RechercheStateModel) {
        return state.parks;
    }

    @Selector()
    static getLoadState(state: RechercheStateModel) {
        return { loaded: state.loaded, loading: state.loading };
    }

    @Action(GetParks)
    getParks(state: StateContext<RechercheStateModel>) {
        return this.allParksService.getParks().pipe(tap((result) => state.setState({ ...state, loaded: true })));
    }
}
