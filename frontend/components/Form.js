import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { inputChange, postForm } from '../state/action-creators';

export function Form(props) {
 const { inputChange, postForm } = props;
 const stateForm = useSelector(state => state.formState);
 const [ form, setForm ] = useState(stateForm);
 const [ disabled, setDisabled] = useState(true);

 const question = form.question_text;
 const trueAnswer = form.true_answer_text;
 const falseAnswer = form.false_answer_text;

 useEffect(() => {
   setForm([stateForm])
 },[stateForm]);

 useEffect(() => {
  let ignore = false;
  if(!ignore) {
   if (question.trim() && trueAnswer.trim() && falseAnswer.trim()) {
    setDisabled(false)
   }
   else {
    return setDisabled(true)
   }
  }
  return () => {ignore = true}
 },[form]);

 const onChange = evt => {
  let id = '';
  if (evt.target.id === "newQuestion") {id = "question_text"}
  else if (evt.target.id === "newTrueAnswer") {id = "true_answer_text"}
  else {id = "false_answer_text"}
  inputChange({id: id, value: evt.target.value});
 }

 const onSubmit = evt => {
  evt.preventDefault();
  postForm(form);
  setDisabled(true);
 }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={form.question} onChange={onChange} id='newQuestion' placeholder="Enter question" />
      <input maxLength={50} value={form.trueAnswer} onChange={onChange} id='newTrueAnswer' placeholder="Enter true answer" />
      <input maxLength={50} value={form.falseAnswer} onChange={onChange} id='newFalseAnswer' placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={disabled} >Submit new quiz</button>
    </form>
  )
}

const mapState = state => ({
 ...state,
 formState: state.formState
})

export default connect(mapState, { inputChange, postForm })(Form);
