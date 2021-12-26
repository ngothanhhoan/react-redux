import {
  SAVE_SET_LIST_TEACHER,
  SAVE_CREATE_TEACHER,
  SAVE_UPDATE_TEACHER,
  SAVE_DELETE_TEACHER,
  SET_MODAL_TEACHER_VISIBLE,
  SAVE_SET_SELECTED_TEACHER,
} from "../type";

const initialState = {
  listTeacher: [],
  selectedTeacher: null,
  isModalVisible: false,
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SET_LIST_TEACHER:
      return {
        ...state,
        listTeacher: payload,
      };

    case SET_MODAL_TEACHER_VISIBLE:
      return {
        ...state,
        isModalVisible: payload,
      };

    case SAVE_SET_SELECTED_TEACHER:
      return {
        ...state,
        selectedTeacher: payload,
      };

    case SAVE_CREATE_TEACHER:
      return {
        ...state,
        listTeacher: [...state.listTeacher, payload],
      };

    case SAVE_UPDATE_TEACHER: {
      const { indexOfTeacher, studentInfo } = payload;
      const tempListTeacher = [...state.listTeacher];
      tempListTeacher.splice(indexOfTeacher, 1, studentInfo);

      return {
        ...state,
        listTeacher: tempListTeacher,
      };
    }

    case SAVE_DELETE_TEACHER: {
      const tempListTeacher = [...state.listTeacher];
      tempListTeacher.splice(payload, 1);

      return {
        ...state,
        listTeacher: tempListTeacher,
      };
    }

    default:
      return state;
  }
};

export default studentReducer;
