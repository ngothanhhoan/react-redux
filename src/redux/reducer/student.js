import {
  SAVE_SET_LIST_STUDENT,
  SAVE_CREATE_STUDENT,
  SAVE_UPDATE_STUDENT,
  SAVE_DELETE_STUDENT,
  SET_MODAL_STUDENT_VISIBLE,
  SAVE_SET_SELECTED_STUDENT,
} from "../type";

const initialState = {
  listStudent: [],
  selectedStudent: null,
  isModalVisible: false,
};

const studentReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_SET_LIST_STUDENT:
      return {
        ...state,
        listStudent: payload,
      };

    case SET_MODAL_STUDENT_VISIBLE:
      return {
        ...state,
        isModalVisible: payload,
      };

    case SAVE_SET_SELECTED_STUDENT:
      return {
        ...state,
        selectedStudent: payload,
      };

    case SAVE_CREATE_STUDENT:
      return {
        ...state,
        listStudent: [...state.listStudent, payload],
      };

    case SAVE_UPDATE_STUDENT: {
      const { indexOfStudent, studentInfo } = payload;
      const tempListStudent = [...state.listStudent];
      tempListStudent.splice(indexOfStudent, 1, studentInfo);

      return {
        ...state,
        listStudent: tempListStudent,
      };
    }

    case SAVE_DELETE_STUDENT: {
      const tempListStudent = [...state.listStudent];
      tempListStudent.splice(payload, 1);

      return {
        ...state,
        listStudent: tempListStudent,
      };
    }

    default:
      return state;
  }
};

export default studentReducer;
