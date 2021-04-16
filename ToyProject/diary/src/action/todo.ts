import { Moment } from "moment";
import { daleActionTypes, noteOpenKeyActionTypes } from "./index";

// 만약 action type에서 as const를 하지 않았다면 각 type 안의 type의 타입이 string으로 해당 액션이 아닌 값이 들어가도 에러가 나지 않게된다.
type AddDaleAction = ReturnType<typeof daleDataActions.add>;
type UpdaeDaleAction = ReturnType<typeof daleDataActions.update>;
type DeleteDaleAction = ReturnType<typeof daleDataActions.delete>;
type ChangeDaleAction = ReturnType<typeof daleDataActions.change>;

export type DaleDataActionType = AddDaleAction | UpdaeDaleAction | DeleteDaleAction | ChangeDaleAction;
export interface DaleNoteState {
  id: string;
  todos: {
    // todoId: number;
    content: string;
    checked: boolean;
  }[];
  date: Moment;
}

export const daleDataActions = {
  add: (diff: DaleNoteState) => ({ type: daleActionTypes.ADD_DALE_TODO, payload: diff }),
  update: (diff: DaleNoteState) => ({ type: daleActionTypes.UPDATE_DALE_TODO, payload: diff }),
  delete: (diff: DaleNoteState) => ({ type: daleActionTypes.DELETE_DALE_TODO, payload: diff }),
  change: (diff: DaleNoteState) => ({ type: daleActionTypes.CHECKED_DALE_TODO, payload: diff }),
};

export type noteOpenKeyActionType = ReturnType<typeof noteOpenKeyActions.change>;
export const noteOpenKeyActions = {
  change: (diff: string | null) => ({ type: noteOpenKeyActionTypes.CHANGE_KEY, payload: diff }),
};
