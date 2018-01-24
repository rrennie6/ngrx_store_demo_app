import {Action} from '@ngrx/store';

export const SET_SAVE_PANEL_OPEN = '[View] Set Save Panel Open';

export interface SetSavePanelOpenPayload {
  savePanelOpen: boolean;
}

export class SetSavePanelOpen implements Action {
  readonly type = SET_SAVE_PANEL_OPEN;
  constructor(public payload: SetSavePanelOpenPayload) { }
}

export type Actions = SetSavePanelOpen;
