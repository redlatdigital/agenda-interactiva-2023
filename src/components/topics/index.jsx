import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import Logo from "../logo";
import WithBackground from "../withBackground";
import WithTopicColor from "../withTopicColor";
import Background from '../../images/roundBackground.jpg';
import topicColors from "../../helpers/topicColors";
import "./index.css";

const Topics = ({ follow }) => <WithBackground background={Background}>
  <div className="animate__animated animate__fadeIn">
    <Logo />
    <div className="topics col-6">
      <p className="topics-description mt-5">Armá tu agenda de manera interactiva y conocé las mesas que más te interesan</p>
      <p className="topics-description mb-5">Te vamos a hacer 15 preguntas sobre tus preferencias de estas 5 categorías:</p>
      {_(topicColors).keys()
        .map((value, i) =>
          <WithTopicColor
            key={i}
            topic={value}
            render={color => <p style={{ color }}>{value}</p>}
          />
        ).value()}
      <Button onClick={follow} className="col-md-3 col-sm-4 col-10 play" variant="outline-light">EMPEZAR</Button>
      <p className="game-owner">Desarrollo: ELAD2023 sobre DemocracyOS</p>
    </div>
  </div>
</WithBackground>

export default Topics;