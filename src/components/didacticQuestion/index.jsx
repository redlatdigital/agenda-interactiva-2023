import React from 'react';
import '../../App.css';
import Question from "../question";
import Topic from "../topic";
import "./index.css";
import WithFooter from "../withFooter";
import Progress from "../progress";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount, options, score, setScore }) {  

  const FooterContent = <Progress current={currentQuestionNumber} total={questionCount} />;

  return <div className="full-height"><WithFooter content={FooterContent}>
    <Topic questionNumber={currentQuestionNumber}/>
    <Question question={question} onOptionSelected={() => moveToNext()} options={options} score={score} setScore={setScore} />

  </WithFooter></div>
}