import React from "react";
import _ from "lodash";
import { Button } from "react-bootstrap";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Topic from "../topic";
import WithTopicColor from "../withTopicColor";
import Background from '../../images/roundBackground.jpg';
import topicColors from "../../helpers/topicColors";
import "./index.css";

const Topics = ({ follow }) => <WithBackground background={Background}>
  <div className="full-height">
    <WithFooter>
      <div className="animate__animated animate__fadeIn">
        <Topic />
        <div className="topics col-lg-6 col-11">
          <p className="topics-description">Armá tu agenda de manera interactiva y conocé las mesas que te pueden llegar a interesar</p>
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
          <p className="game-owner mt-5">Desarrollo: ELAD2023 sobre DemocracyOS</p>
        </div>
      </div>
      
    </WithFooter>

  </div>
</WithBackground>

export default Topics;