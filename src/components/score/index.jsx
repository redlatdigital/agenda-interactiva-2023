import React, { useState } from "react";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/roundBackground.jpg';
import Logo from "../logo";

import FirstLoading from '../../images/firstLoadingBackground.svg';
import SecondLoading from '../../images/secondLoadingBackground.svg';
import ThirdLoading from '../../images/thirdLoadingBackground.svg';
import Separator from '../separator';

import { ReactComponent as TwitterIcono } from "../../images/iconoX.svg";
import { ReactComponent as WhatsappIcono } from "../../images/iconoWhats.svg";
import { ReactComponent as LinkIcono } from "../../images/iconoLink.svg";
import {
  RadarChart,
  Sankey,
  CircularGridLines,
  Hint,
  Treemap
} from "react-vis";
import "react-vis/dist/style.css";


import "./index.css";


const backgrounds = [ FirstLoading, SecondLoading, ThirdLoading, FirstLoading ];
const FinalLoading = ({ setDoneLoading }) => {
  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const background = _.get(backgrounds, backgroundNumber);
  const moveBackground = () => {
    setBackgroundNumber(backgroundNumber+1);
    if (backgroundNumber == 3)
      setDoneLoading(true);
  }
  setTimeout(moveBackground, 1000)

  return <WithBackground key={backgroundNumber} background={background} className="loading-background">
    <Logo />
  </WithBackground>
};



const Score = ({ score, total, setPlayAgain }) => {
  const [doneLoading, setDoneLoading] = useState(false);
  const [hoveredCell, setHCell] = useState(false);


  const textShare = `Armé mi agenda para el Encuentro Latinoamericano de Antropología digital con Mi Mi Agenda Interactiva. \nPoné a prueba tus intereses y veamos si nos encontramos en algunas mesas 😉 \n\nEntra a https://blablabla.com/ para armar tu agenda`

    const shareOnWhatsApp = () => {
      const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textShare)}`;
      window.open(whatsappUrl, '_blank');
    };

    const shareOnTwitter = () => {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textShare)}`;
      window.open(twitterUrl, '_blank');
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(textShare);
    };



  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}>
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">
              <Logo />
              <Separator />
              <RadarChart
            data={[
              {
                name: "Materialidades, medios e infraestructuras.",
                mileage: 5,
                price: 3,
                safety: 2,
                performance: 1,
                interior: 4,
                fill: "rgba(114,172,240)",
                stroke: "#cccccc"
              },
            ]}
            tickFormat={(t) => {
              return "";
            }}
            domains={[
              {
                name: "mileage",
                domain: [0, 5],
                tickFormat: (t) => {
                  if (t < 5 && t > 0) {
                    return Math.round(t);
                  }
                  return "";
                }
              },
              {
                name: "price",
                domain: [0, 5],
                getValue: (d) => d.price
              },
              { name: "safety", domain: [0, 5], getValue: (d) => d.safety },
              {
                name: "performance",
                domain: [0, 5],
                getValue: (d) => d.performance
              },
              { name: "interior", domain: [0, 5], getValue: (d) => d.interior },
            ]}
            width={300}
            height={300}
            style={{
              polygons: {
                strokeWidth: 1,
                strokeOpacity: 0.8,
                fillOpacity: 0.8
              },
              labels: {
                textAnchor: "middle",

              },
              axes: {
                line: {
                  fillOpacity: 0.8,
                  strokeWidth: 0.5,
                  strokeOpacity: 0.8
                },
                ticks: {
                  fillOpacity: 0,
                  strokeOpacity: 0
                },
                text: {}
              }
            }}
          >
        <CircularGridLines
          tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
        />
        {hoveredCell && (
          <Hint
            style={{
              display: "flex",
              color: "#fff",
              background: "#000",
              alignItems: "center",
              padding: "5px"
            }}
            value={hoveredCell}
            align={{
              horizontal: Hint.ALIGN.AUTO,
              vertical: Hint.ALIGN.TOP_EDGE
            }}
          >
            <div className="rv-hint__content">
              {hoveredCell.domain}: {hoveredCell.value}
            </div>
          </Hint>
        )}
      </RadarChart>

              <div className="col-10">
                <p className="score-description">{_.toUpper("Según las respuestas que brindaste surge que tus intereses están más cercanos de los ejes 'XXX' y 'YYY' ")}</p>
                <p className="score-secondary-description">{_.toUpper("Agendá las siguientes mesas que están dentro de estos ejes para que no te pierdas ninguna:")}</p>
                <div className="table-responsive mt-5">
                  <table className="table table-success table-striped">
                    <thead>
                      <th>Eje</th>
                      <th>Mesa</th>
                    </thead>
                    <tbody>
                      <td>Eje</td>
                      <td>Mesa</td>
                    </tbody>
                  </table>
                </div>
              </div>


              <p className="share-text mt-5">Compartí tu agenda en Redes sociales</p> 
              <div>
                <a onClick={shareOnTwitter} className="iconos">
                  <TwitterIcono alt="twitter" />
                </a>
                <a onClick={shareOnWhatsApp}  className="iconos">
                  <WhatsappIcono alt="twitter" />
                </a>
                <a onClick={copyToClipboard} className="iconos">
                  <LinkIcono alt="twitter" />
                </a>
              </div>
            </div>
          </WithFooter>
        </WithBackground>
      : <FinalLoading setDoneLoading={setDoneLoading}/>
  }
  </div>
};

export default Score;