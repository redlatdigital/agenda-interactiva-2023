import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import ButtonVolver from "../buttonVolver"
import WithTopicColor from "../withTopicColor";
import Background from '../../images/roundBackground.jpg';
import topicColors from "../../helpers/topicColors";
import "./index.css";

const Topics = ({ follow }) => <WithBackground background={Background}>
  <div className="full-height">
    <WithFooter>
      <div className="animate__animated animate__fadeIn">
        {/* <Topic /> */}
        <div className="topics col-lg-6 col-11">
          <p className="small mt-5"><i>Arma tu agenda de forma interactiva y descubre las mesas que podrían interesarte.</i></p>
          <p className="fw-bolder mb-5">Te haremos una docena de preguntas para conocer tus preferencias en estas categorías:</p>
          {_(topicColors).keys()
            .map((value, i) =>
              <WithTopicColor
                key={i}
                topic={value}
                render={color => <p style={{ color }}>{value}</p>}
              />
            ).value()}
          <Button onClick={follow} className="col-md-3 col-sm-4 col-10 play mt-5" variant="outline-light">EMPEZAR</Button>
          <p className="small mt-5"><i>* Las preguntas son hipotéticas e ilustrativas</i></p>
          <ButtonVolver />
        </div>
      </div>
      
    </WithFooter>

  </div>
</WithBackground>

export default Topics;