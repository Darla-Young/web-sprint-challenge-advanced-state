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
 RESET_FORM
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


  // QUIZ
  case 'FETCHQUIZ_START':
   return ({
    ...state,
    quizState: false
   });
  case SET_QUIZ_INTO_STATE:
   return ({
    ...state,
    quizState: action.payload
   });
  case SET_SELECTED_ANSWER:
   return state;
  case SET_INFO_MESSAGE:
   return state;

  // FORM
  case INPUT_CHANGE:
   return ({
    ...state,
    formState: action.payload,
    messageState: ''
   });
  case 'POSTQUIZ_START':
   return ({
    ...state,
    postState: 'fetching',
    messageState: 'Submitting question...'
   })
  case 'POSTQUIZ_SUCCESS':
   return ({
    ...state,
    postState: 'success',
    messageState: 'Question successfully added to quiz',
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   })
  case 'POSTQUIZ_FAIL':
   return ({
    ...state,
    postState: 'fail',
    messageState: action.payload,
    formState: {
     question_text: '',
     true_answer_text: '',
     false_answer_text: '',
    }
   })
  default:
   return state;
 }
}

/* - `[POST] http://localhost:9000/api/quiz/answer`
  - Expects a payload with the following properties: `quiz_id`, `answer_id`
  - Example of payload: `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
  - A response to a proper request includes `200 OK` and feedback on the answer */

export default reducer;
