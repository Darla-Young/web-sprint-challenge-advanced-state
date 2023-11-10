import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { inputChange, postQuiz } from '../state/action-creators';

const emptyForm = {
  question_text: '',
  true_answer_text: '',
  false_answer_text: ''
}

export function Form(props) {
 const { inputChange, postQuiz, postState } = props;
 const [ newQuiz, setNewQuiz ] = useState(emptyForm)

 const onChange = evt => {
  setNewQuiz({...newQuiz, [evt.target.id]:evt.target.value})
  return inputChange(newQuiz);
 }

 const onSubmit = evt => {
  evt.preventDefault();
  postQuiz(newQuiz);
 }

 useEffect(() => {
  postState === 'success' ? setNewQuiz(emptyForm) : null
 },[postState])

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={newQuiz.question_text} onChange={onChange} id="question_text" placeholder="Enter question" />
      <input maxLength={50} value={newQuiz.true_answer_text} onChange={onChange} id="true_answer_text" placeholder="Enter true answer" />
      <input maxLength={50} value={newQuiz.false_answer_text} onChange={onChange} id="false_answer_text" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapState = state => ({
 ...state,
 postState: state.quizState
})

export default connect(mapState, { inputChange, postQuiz })(Form);
