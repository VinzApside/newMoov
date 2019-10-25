import { State, Selector, Action, StateContext } from '@ngxs/store';
import { InitialiseParks } from '../actions/recherche.actions';
import { AllParksService } from '../../service/allparks.service';
import { tap } from 'rxjs/operators';
import { state } from '@angular/animations';
import { parksDataResponse } from 'src/app/model/moovhubBack';
import { forkJoin } from 'rxjs/observable/forkJoin';

export class RechercheStateModel {
    loading: boolean;
    loaded: boolean;
    parks: any;
    freeplaces: any;
}
@State<RechercheStateModel>({
    name: 'allParks',
    defaults: {
        loading: false,
        loaded: false,
        parks: [],
        freeplaces: []
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

    @Action(InitialiseParks)
    initialiseParks({ getState, setState }: StateContext<RechercheStateModel>) {
        // const state = ctx.getState();

        return forkJoin(this.allParksService.getAllParksData(), this.allParksService.getFreePlaces()).pipe(
            tap(([parksGeneralData, parksFreeplaces]) => {
                const parksAllDataConcat = [];
                for (const i in parksGeneralData) {
                    if (parksGeneralData[i].status === 'active') {
                        const thatParkFreeData = parksFreeplaces.find(
                            (parkFreeData) => parkFreeData.id_park_source === parksGeneralData[i].id_park_source
                        );
                        let parkNewData = Object.assign(thatParkFreeData, parksGeneralData[i]);
                        parksAllDataConcat.push(parkNewData);
                    } else {
                        parksAllDataConcat.push(parksGeneralData[i]);
                    }
                }
                const state = getState();
                setState({
                    ...state,
                    loaded: true,
                    parks: parksAllDataConcat
                });
            })
        );

        // return this.allParksService.getAllData().pipe(
        //     tap((result) => {
        //         const state = getState();
        //         setState({
        //             ...state,
        //             loaded: true,
        //             parks: result
        //         });
        //     })
        // );
    }
}
