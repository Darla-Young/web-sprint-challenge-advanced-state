import { INPUT_CHANGE } from './action-types';

const initialState = {
 wheelState: 0,
 quizState: '',
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
  case INPUT_CHANGE:
   return ({
    ...state,
    formState: action.payload,
    messageState: ''
   });
  case 'POSTQUIZ_START':
   return ({
    ...state,
    quizState: 'fetching',
    messageState: 'Submitting question...'
   })
  case 'POSTQUIZ_SUCCESS':
   return ({
    ...state,
    quizState: 'success',
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
    quizState: 'fail',
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
