import { 
 // WHEEL
 MOVE_CLOCKWISE, 
 MOVE_COUNTERCLOCKWISE, 
 // QUIZ
 SET_QUIZ_INTO_STATE, 
 SET_SELECTED_ANSWER,
 SET_INFO_MESSAGE,
 // FORM
 INPUT_CHANGE,
 // RESET_FORM
} from './action-types';

const initialState = {
 wheelState: 0,
 quizState: false,
 postState: '',
 selectedAnswerState: null,
 messageState: '',
 formState: {
  question_text: '',
  true_answer_text: '',
  false_answer_text: '',
 }
}

const reducer = (state=initialState,action) => {
 switch(action.type) {
  // WHEEL
  case MOVE_CLOCKWISE:
   if (state.wheelState < 5) {
    return {
     ...state,
     wheelState: state.wheelState + 1
    }
   } else {
    return {
     ...state,
     wheelState: 0
    }
   }

  case MOVE_COUNTERCLOCKWISE:
   if (state.wheelState > 0) {
    return {
     ...state,
     wheelState: state.wheelState - 1
    }
   } else {
    return {
     ...state,
     wheelState: 5
    }
   }

  // QUIZ
  case SET_QUIZ_INTO_STATE:
   return {
    ...state,
    quizState: action.payload
   };

  case SET_SELECTED_ANSWER:
   return {
    ...state,
    selectedAnswerState: action.payload
   };

  case SET_INFO_MESSAGE:
   return {
    state,
    messageState: action.payload
   };

  // FORM
  case INPUT_CHANGE:
   return {
    ...state,
    formState: action.payload,
    messageState: ''
   };

  case 'POSTQUIZ_START':
   return {
    ...state,
    postState: 'fetching',
    messageState: 'Submitting question...'
   };

  case 'POSTQUIZ_SUCCESS':
   return {
    ...state,
    postState: 'success',
    messageState: 'Question successfully added to quiz',
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   };

  case 'POSTQUIZ_FAIL':
   return {
    ...state,
    postState: 'fail',
    messageState: action.payload,
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   };

  default:
   return state;
 }
}

export default reducer;
