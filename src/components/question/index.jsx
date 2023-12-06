import React from "react";
import { Button, Row } from "react-bootstrap";
import "./index.css";

const MobileSizeContainer = ({ children }) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
  {children}
</div>;

const Option = ({ question ,option, onOptionSelected, score, setScore }) => {

  const makeChanges = () => {
    const newScore = {...score, [question.eje]: score[question.eje]+option.value}
    setScore(newScore)
    onOptionSelected(option)
  }

  return <Button className="btn-light option-button col-md-12" onClick={makeChanges}>
    <span className="option-text">{option.label}</span>
  </Button>
}

const Question = ({ question, options, onOptionSelected, score, setScore }) => (
  <div className="row">
    <div className="col-10 col-lg-6"><p className="question">{question.text}</p></div>
    <div className="col-12">
      <MobileSizeContainer>
        {options.map((option, number) =>
          <Row key={number} className="option">
            <Option
              question={question}
              option={option}
              onOptionSelected={onOptionSelected}
              score={score}
              setScore={setScore}
            />
          </Row>
        )}
      </MobileSizeContainer>
    </div>
  </div>
);

export default Question;