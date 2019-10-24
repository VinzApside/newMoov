import { Action } from '@ngrx/store';

//load Parks
export const LOAD_PARKS = '[Products] Load Parks';
export const LOAD_PARKS_FAIL = '[Products] Load Parks Fail';
export const LOAD_PARKS_SUCCESS = '[Products] Load Parks Success';

export class LoadParks implements Action {
    readonly type = LOAD_PARKS;
    constructor(public payload: {}) {}
}

export class LoadParksFail implements Action {
    readonly type = LOAD_PARKS_FAIL;
    constructor(public payload: any) {}
}

export class LoadParksSuccess implements Action {
    readonly type = LOAD_PARKS_SUCCESS;
    constructor(public payload: any) {}
}

//action types
export type ParksAction = LoadParks | LoadParksFail | LoadParksSuccess;
