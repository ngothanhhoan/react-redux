import {
  SAVE_SET_LIST_TEACHER,
  SAVE_CREATE_TEACHER,
  SAVE_UPDATE_TEACHER,
  SAVE_DELETE_TEACHER,
  SET_MODAL_TEACHER_VISIBLE,
  SAVE_SET_SELECTED_TEACHER,
} from "../type";

export const actSaveSetListTeacher = (payload) => ({
  type: SAVE_SET_LIST_TEACHER,
  payload,
});

export const actSaveCreateTeacher = (payload) => ({
  type: SAVE_CREATE_TEACHER,
  payload,
});

export const actSaveUpdateTeacher = (payload) => ({
  type: SAVE_UPDATE_TEACHER,
  payload,
});

export const actSaveDeleteTeacher = (payload) => ({
  type: SAVE_DELETE_TEACHER,
  payload,
});

export const actSetModalTeacherVisible = (payload) => ({
  type: SET_MODAL_TEACHER_VISIBLE,
  payload,
});

export const actSaveSetSelectedTeacher = (payload) => ({
  type: SAVE_SET_SELECTED_TEACHER,
  payload,
});
