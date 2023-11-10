import axios from "axios";
import {
 MOVE_CLOCKWISE,
 MOVE_COUNTERCLOCKWISE,
 SET_QUIZ_INTO_STATE,
 SET_SELECTED_ANSWER,
 SET_INFO_MESSAGE,
 INPUT_CHANGE,
 RESET_FORM
} from './action-types'

// WHEEL PAGE
export function moveClockwise() {
 return ({type:MOVE_CLOCKWISE})
}
export function moveCounterClockwise() {
 return ({type:MOVE_COUNTERCLOCKWISE})
}

// QUIZ PAGE
export function selectAnswer() {
 return ({type:SET_SELECTED_ANSWER})
}
export function setMessage() {
 return ({type:SET_INFO_MESSAGE})
}
export function setQuiz() {
 return ({type:SET_QUIZ_INTO_STATE})
}
export function fetchQuiz(action) {
  return function (dispatch) {
   dispatch({type:FETCHQUIZ_START});
   axios
    .get()
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}

// FORM PAGE
export function inputChange(form) {
 return ({type:INPUT_CHANGE, payload:form})
}

export function postQuiz(form) {
  return function (dispatch) {
   dispatch({type:'POSTQUIZ_START'});
   axios
    .post('http://localhost:9000/api/quiz/new',form)
    .then(res => {
     dispatch({type:'POSTQUIZ_SUCCESS', payload:res.data});
    })
    .catch(err => {
     dispatch({type:'POSTQUIZ_FAIL',payload:err.message});
    })
  }
}
