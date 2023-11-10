import { combineReducers } from 'redux'

const initialWheelState = 0
const initialQuizState = null
const initialSelectedAnswerState = null
const initialMessageState = ''
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}

function wheel(state = initialWheelState, action) {
  return state
}

/* - `[GET] http://localhost:9000/api/quiz/next`
  - The response to a proper request includes `200 OK` and the next quiz object */
function quiz(state = initialQuizState, action) {
  return state
}

function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

/* - `[POST] http://localhost:9000/api/quiz/answer`
  - Expects a payload with the following properties: `quiz_id`, `answer_id`
  - Example of payload: `{ "quiz_id": "LVqUh", "answer_id": "0VEv0" }`
  - A response to a proper request includes `200 OK` and feedback on the answer */
function infoMessage(state = initialMessageState, action) {
  return state
}

/* - `[POST] http://localhost:9000/api/quiz/new`
  - Expects a payload with the following properties: `question_text`, `true_answer_text`, `false_answer_text`
  - Example of payload: `{ "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }`
  - The response to a proper request includes `201 Created` and the newly created quiz object
  - A malformed client payload will result in a `422 Unprocessable Entity` response with a reason */
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ 
 wheel, 
 quiz, 
 selectedAnswer, 
 infoMessage, 
 form 
})
