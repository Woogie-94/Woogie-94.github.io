import { DaleDataActionType, DaleNoteState, noteOpenKeyActionType } from "../action/todo";
import { daleActionTypes, noteOpenKeyActionTypes } from "../action";

export const daleNoteReducer = (state: DaleNoteState[] = [], action: DaleDataActionType): DaleNoteState[] => {
  const notEqualState = () => state.filter((state) => state.id !== action.payload.id);
  const equalState = () => state.filter((state) => state.id === action.payload.id)[0];

  switch (action.type) {
    case daleActionTypes.ADD_DALE_TODO:
      const todos = equalState() ? [...equalState().todos] : [];
      return [...notEqualState(), { ...action.payload, todos: [...todos] }];
    case daleActionTypes.UPDATE_DALE_TODO:
      return [...notEqualState(), { ...equalState(), todos: [...action.payload.todos] }];
    default:
      return state;
  }
};

export const noteOpenKeyReducer = (state: string | null = null, action: noteOpenKeyActionType) => {
  switch (action.type) {
    case noteOpenKeyActionTypes.CHANGE_KEY:
      return action.payload;
    default:
      return state;
  }
};
