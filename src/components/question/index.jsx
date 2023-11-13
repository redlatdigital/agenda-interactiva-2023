import React from "react";
import { Button, Row } from "react-bootstrap";
import "./index.css";

const MobileSizeContainer = ({ children }) => <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
  {children}
</div>;

const Option = ({ onOptionSelected, option }) =>
  <Button className="btn-light option-button col-md-12" onClick={() => onOptionSelected(option)}>
    <span className="option-text">{option.label}</span>
  </Button>

const Question = ({ question, onOptionSelected }) => (
  <div className="col-10 animate__animated animate__fadeIn">
    <p className="question">{question.text}</p>
    <MobileSizeContainer>
      {[
        {
          value: 5,
          label: 'Me interesa mucho'
        },
        {
          value: 3,
          label: 'Tengo algo de interés'
        },
        {
          value: 1,
          label: 'No entiendo muy bien a que se refiere'
        },
        {
          value: 0,
          label: 'No me interesa'
        }
      ].map((option, number) =>
        <Row key={number} className="option">
          <Option
            question={question}
            option={option}
            onOptionSelected={onOptionSelected}
          />
        </Row>
      )}
    </MobileSizeContainer>
  </div>
);

export default Question;