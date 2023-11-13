import axios from "axios";
import {
 MOVE_CLOCKWISE,
 MOVE_COUNTERCLOCKWISE,
 SET_QUIZ_INTO_STATE,
 SET_SELECTED_ANSWER,
 SET_INFO_MESSAGE,
 INPUT_CHANGE,
 // RESET_FORM
} from './action-types'

// WHEEL PAGE
export function moveClockwise() {
 return ({type:MOVE_CLOCKWISE});
}

export function moveCounterClockwise() {
 return ({type:MOVE_COUNTERCLOCKWISE});
}

// QUIZ PAGE
export function selectAnswer(answer) {
 return ({type:SET_SELECTED_ANSWER, payload:answer});
}

export function setMessage(message) {
 return ({type:SET_INFO_MESSAGE,payload:message});
}

export function fetchQuiz() {
  return function (dispatch) {
   axios
    .get('http://localhost:9000/api/quiz/next')
    .then(res => {
     dispatch({type:SET_QUIZ_INTO_STATE, payload:res.data});
    })
    .catch(err => console.log(err));
  }
}

export function postAnswer(answer) {
  return function (dispatch) {
   axios
    .post('http://localhost:9000/api/quiz/answer',answer)
    .then(res => {
     dispatch(selectAnswer(''));
     dispatch(setMessage(res.data.message));
     dispatch(fetchQuiz);
    })
    .catch(err => console.log(err));
  }
}

// FORM PAGE
export function inputChange(form) {
 return ({type:INPUT_CHANGE, payload:form});
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
