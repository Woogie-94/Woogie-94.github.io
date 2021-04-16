//**********************  DALE  ***************************//
export const daleActionTypes = {
  // as const를 사용하지 않으면 type이 string이 된다
  // 액션 타입은 바뀔 수 없는 유일한 값이기에 값 자체를 타입으로 지정해주는게 올바르다
  ADD_DALE_TODO: "ADD_DALE" as const,
  UPDATE_DALE_TODO: "UPDATE_DALE_TODO" as const,
  DELETE_DALE_TODO: "DELETE_DALE_TODO" as const,
  CHECKED_DALE_TODO: "CHECKED_DALE_TODO" as const,
};

//**********************  WEEKLY  ***************************//
export const weeklyActionTypes = {
  ADD_WEEKLY: "ADD_WEEKLY" as const,
  UPDATE_WEEKLY_TODO: "UPDATE_WEEKLY_TODO" as const,
  DELETE_WEEKLY_TODO: "DELETE_WEEKLY_TODO" as const,
  CHECKED_WEEKLY_TODO: "CHECKED_WEEKLY_TODO" as const,
};

//**********************  NOTEOPENKEY  ***************************//
export const noteOpenKeyActionTypes = {
  CHANGE_KEY: "CHANGE_KEY" as const,
};
