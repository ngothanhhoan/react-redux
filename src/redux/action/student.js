import {
  SAVE_SET_LIST_STUDENT,
  SAVE_CREATE_STUDENT,
  SAVE_UPDATE_STUDENT,
  SAVE_DELETE_STUDENT,
  SET_MODAL_STUDENT_VISIBLE,
  SAVE_SET_SELECTED_STUDENT,
} from "../type";

export const actSaveSetListStudent = (payload) => ({
  type: SAVE_SET_LIST_STUDENT,
  payload,
});

export const actSaveCreateStudent = (payload) => ({
  type: SAVE_CREATE_STUDENT,
  payload,
});

export const actSaveUpdateStudent = (payload) => ({
  type: SAVE_UPDATE_STUDENT,
  payload,
});

export const actSaveDeleteStudent = (payload) => ({
  type: SAVE_DELETE_STUDENT,
  payload,
});

export const actSetModalStudentVisible = (payload) => ({
  type: SET_MODAL_STUDENT_VISIBLE,
  payload,
});

export const actSaveSetSelectedStudent = (payload) => ({
  type: SAVE_SET_SELECTED_STUDENT,
  payload,
});
