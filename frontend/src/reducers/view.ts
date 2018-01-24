import {Action} from '@ngrx/store';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as viewActions from '../actions/view';

export interface State {
  savePanelOpen: boolean;
}

export const savePanelOpenReducer = (savePanelOpen: boolean, action: Action): boolean => {
    switch (action.type) {
      case viewActions.SET_SAVE_PANEL_OPEN: {
        return action.payload.savePanelOpen;
      }
      default: {
        return savePanelOpen;
      }
    }
  };

export const reducer: ActionReducer<State> = combineReducers({
  savePanelOpen: savePanelOpenReducer
});
