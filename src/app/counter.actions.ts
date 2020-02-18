import { createAction, Action } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');

// export class increment implements Action {
//     readonly type = '[Counter Component] Increment';
//     constructor(public payload: 1) { }
// }