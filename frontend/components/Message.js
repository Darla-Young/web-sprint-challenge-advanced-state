import React from 'react'

export default function Message(props) {
  return <div id="message">Nice job!</div>
}

const mapState = state => {
 wheel = state.wheel, 
 quiz = state.quiz, 
 selectedAnswer = state.selectedAnswer, 
 infoMessage = state.infoMessage, 
 form = state.form
}