import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {
 const { form } = props;
 const [ entry, setEntry ] = useState({
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: ''
 });

  const onChange = evt => {
   setEntry({
    ...entry,
    [evt.target.id]: evt.target.value
   });
   return entry;
  }

  const onSubmit = evt => {
   evt.preventDefault();
   console.log(entry);
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapState = state => ({
 ...state,
 form: state.form
});

export default connect(mapState, actionCreators)(Form);
