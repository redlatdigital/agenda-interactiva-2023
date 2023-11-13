import React from 'react';
import '../../App.css';
import Question from "../question";
import Topic from "../topic";
import Logo from "../logo";
import "./index.css";
import WithFooter from "../withFooter";
import Progress from "../progress";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount }) {  

  const FooterContent = <Progress current={currentQuestionNumber} total={questionCount} />;

  return <WithFooter content={FooterContent}>
    <Logo  />
    <Topic questionNumber={currentQuestionNumber}/>
    <Question question={question} onOptionSelected={() => moveToNext()}/>

  </WithFooter>
}