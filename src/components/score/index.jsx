import React, { useState } from "react";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/roundBackground.jpg';
import Logo from "../logo";

import calculando1 from '../../images/calculando1.gif';
import calculando2 from '../../images/calculando2.gif';
import calculando3 from '../../images/calculando3.gif';

import { ReactComponent as TwitterIcono } from "../../images/iconoX.svg";
import { ReactComponent as WhatsappIcono } from "../../images/iconoWhats.svg";
import { ReactComponent as LinkIcono } from "../../images/iconoLink.svg";
import {
  RadarChart,
  CircularGridLines,
} from "react-vis";
import "react-vis/dist/style.css";


import "./index.css";


const backgrounds = [ calculando1, calculando2, calculando3 ];

const FinalLoading = ({ setDoneLoading }) => {
  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const background = _.get(backgrounds, backgroundNumber);
  const moveBackground = () => {
    setBackgroundNumber(backgroundNumber+1);
    if (backgroundNumber === 2)
      setDoneLoading(true);
  }
  setTimeout(moveBackground, 1500)

  return <WithBackground className="loading-background">
    <Logo />
    <img src={background} alt="Calculando..." height={200} className="mt-5"/>
  </WithBackground>
};


const mapLabels = {
  materialidades: "Materialidades, medios e infraestructuras",
  metodologias: "Perspectivas éticas y metodológicas. ",
  contextos: "Contextos digitales, digitalizados y transformados",
  identidades: "Identidades, subjetividades y comunidades",
  comunicacion: "Comunicación científica y organización a través de lo digital",
}


const Score = ({ score }) => {
  const [doneLoading, setDoneLoading] = useState(false);


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

    const maxValue = Math.max(...Object.values(score));

    const sortedEntries = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const topTwo = sortedEntries.slice(0, 2);

  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}> <div className="full-height">
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">
              <RadarChart
              data={[
                {
                  ...score,
                  fill: "rgba(114,172,240)",
                  stroke: "#cccccc"
                },
              ]}
              tickFormat={(t) => { return "";}}
              margin={80}
              domains={[
                { name: "Materialidades", domain: [0, maxValue], getValue: (d) => d.materialidades },
                { name: "Metodología", domain: [0, maxValue], getValue: (d) => d.metodologias },
                { name: "Contextos", domain: [0, maxValue], getValue: (d) => d.contextos },
                { name: "Identidades ", domain: [0, maxValue], getValue: (d) => d.identidades },
                { name: "Comunicación", domain: [0, maxValue], getValue: (d) => d.comunicacion },
              ]}
              width={400}
              height={400}
              style={{
                polygons: {
                  strokeWidth: 1,
                  fillOpacity: 0.9
                },
                labels: {
                  textAnchor: "middle",
                  fill: "#ffffff",
                  fontSize: 15,
                  whiteSpace: "pre-line",
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
          <CircularGridLines tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)} />
        </RadarChart>

              <div className="col-10">
                <p className="score-description">{_.toUpper("Según las respuestas que brindaste surge que tus intereses están más cercanos de los ejes:")}</p>
                {Object.values(topTwo).map((eje, key) => <p><i key={key}>{mapLabels[eje[0]]}</i></p>)}
                <p className="score-secondary-description">{_.toUpper("Agendá las siguientes mesas que están dentro de estos ejes para que no te pierdas ninguna:")}</p>
                <div className="table-responsive mt-5">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>Eje</th>
                        <th>Mesa</th>
                        <th>Fecha y hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XXX</td>
                        <td>Bla bla bla 1</td>
                        <td>DD/MM - HH:MM</td>
                      </tr>
                      <tr>
                        <td>XXX</td>
                        <td>Bla bla bla 2</td>
                        <td>DD/MM - HH:MM</td>
                      </tr>
                      <tr>
                        <td>YYY</td>
                        <td>Bla bla bla 3</td>
                        <td>DD/MM - HH:MM</td>
                      </tr>    
                      <tr>
                        <td>YYY</td>
                        <td>Bla bla bla 4</td>
                        <td>DD/MM - HH:MM</td>
                      </tr>                                            
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
        </div>
        </WithBackground>
      : <FinalLoading setDoneLoading={setDoneLoading}/>
  }
  </div>
};

export default Score;