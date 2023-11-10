import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../state/action-creators';

const Quiz = (props) => {
 const { quizState, fetchQuiz } = props;
 const [ selected, setSelected ] = useState({zero: null,one: null})

 const onClick = e => {
  setSelected({
   [e.target.id]:selected,
   [!e.target.id]:null
  })
 }

 const onSubmit = e => {
  e.preventDefault();

 }

 useEffect(() => {
  fetchQuiz();
 },[])

  return (
    <div id="wrapper">
      {
        quizState ? (
          <>
            <h2>{quizState.question}</h2>

            <div id="quizAnswers">
              <div id='zero' className={selected.zero}>
                {quizState.answers[0].text}
                <button onClick={onClick}>
                  SELECTED
                </button>
              </div>

              <div id='one' className="answer">
              {quizState.answers[1].text}
                <button onClick={onClick}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={onSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapState = state => ({
 ...state,
 quizState: state.quizState
})

export default connect(mapState,{ fetchQuiz })(Quiz);