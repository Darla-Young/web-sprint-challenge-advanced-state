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
 console.log('reducer');
 switch(action.type) {
  // WHEEL


  // QUIZ
  case SET_QUIZ_INTO_STATE:
   console.log(action);
   return ({
    ...state,
    quizState: action.payload
   });

  case SET_SELECTED_ANSWER:
   console.log(action)
   return ({
    ...state,
    selectedAnswerState: action.payload
   });

  case SET_INFO_MESSAGE:
   console.log(action);
   return ({
    state,
    messageState: action.payload
   });

  // FORM
  case INPUT_CHANGE:
   console.log(action);
   return ({
    ...state,
    formState: action.payload,
    messageState: ''
   });

  case 'POSTQUIZ_START':
   console.log(action);
   return ({
    ...state,
    postState: 'fetching',
    messageState: 'Submitting question...'
   });

  case 'POSTQUIZ_SUCCESS':
   console.log(action);
   return ({
    ...state,
    postState: 'success',
    messageState: 'Question successfully added to quiz',
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   });

  case 'POSTQUIZ_FAIL':
   console.log(action);
   return ({
    ...state,
    postState: 'fail',
    messageState: action.payload,
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   });

  default:
   return state;
 }
}

export default reducer;
