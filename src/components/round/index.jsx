import React, { useState, useEffect } from 'react';
import _ from "lodash";
import DicaticQuestion from "../didacticQuestion";
import Background from '../../images/roundBackground.jpg';
import WithBackground from "../withBackground";
import Countdown from "../countdown";
import Score from "../score";
import questionSets from "../../questions.json";

export default function Round({ setPlayAgain }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState({
              metodologias: 1,
              contextos: 1,
              territorio: 1,
              politico: 1,
              identidades: 1,
              genero: 1,
  });  
  const [isLoading, setIsLoading] = useState(true);

  const options = [
    {
      value: 4,
      label: 'Me interesa mucho'
    },
    {
      value: 2,
      label: 'Tengo algo de interés'
    },
    {
      value: 1,
      label: 'No entiendo a que se refiere'
    },
    {
      value: 0,
      label: 'No me interesa'
    }
  ]
  
  useEffect(() => {
    const roundQuestions = _.sample(questionSets);
    setQuestions(_.shuffle(roundQuestions));
  }, []);

  if (_.isEmpty(questions)) return null;
  
  const moveToNext = isCorrect => {
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  };
  
  const questionsCount = _.size(questions);
  const isActive = currentQuestionNumber < questionsCount;
  const currentQuestion = questions[currentQuestionNumber];
  return (
    <div className="">
    {
      isActive?
        <WithBackground background={Background}>
          {
            isLoading? <Countdown setIsLoading={setIsLoading}/>
            : <div className="full-height">
              <DicaticQuestion
                key={currentQuestionNumber}
                question={currentQuestion}
                moveToNext={moveToNext}
                questionCount={questionsCount}
                currentQuestionNumber={currentQuestionNumber}
                options={options}
                score={score}
                setScore={setScore}
              />
            </div>
          }
        </WithBackground>
        : <Score score={score} total={questionsCount} setPlayAgain={setPlayAgain}/>
      }
    </div>
  );
};