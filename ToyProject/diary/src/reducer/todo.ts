import { DaleDataActionType, DaleNoteState, noteOpenKeyActionType } from "../action/todo";
import { daleActionTypes, noteOpenKeyActionTypes } from "../action";

export const daleNoteReducer = (state: DaleNoteState[] = [], action: DaleDataActionType): DaleNoteState[] => {
  switch (action.type) {
    case daleActionTypes.ADD_DALE_TODO:
      return [...state, action.payload];
    case daleActionTypes.UPDATE_DALE_TODO:
      const notSameState = () => state.filter((todo) => todo.id !== action.payload.id);
      return [...notSameState(), action.payload];
    default:
      return state;
  }
};

export const noteOpenKey = (state: string | null = null, action: noteOpenKeyActionType) => {
  switch (action.type) {
    case noteOpenKeyActionTypes.CHANGE_KEY:
      return action.payload;
    default:
      return state;
  }
};
