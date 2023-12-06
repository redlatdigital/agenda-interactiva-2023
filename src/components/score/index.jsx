import React, { useState } from "react";
import _ from "lodash";
import WithBackground from "../withBackground";
import WithFooter from "../withFooter";
import Background from '../../images/roundBackground.jpg';
import Logo from "../logo";
import ponencias from "../../ponencias.json";

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
  metodologias: "Enfoques Teóricos y Metodológicos para la Antropología Digital",
  contextos: "Contextos Laborales Digitalizados",
  territorio: "Lo Digital en el Territorio",
  politico: "Internet como Espacio Político",
  identidades: "Identidades y Subjetividades Online",
  genero: "Problemáticas de Género en Línea"
}


const Score = ({ score }) => {
  const [doneLoading, setDoneLoading] = useState(false);


  const textShare = `Ya armé mi agenda interactiva para el ELAD2023. Puedes poner a prueba tus intereses entrando a https://sites.google.com/view/antropologiadigital/encuentro-2023/agenda-interactiva y vemos si nos encontramos en algunas mesas 😉. \n\nPara más información del evento -> https://sites.google.com/view/antropologiadigital/encuentro-2023 \n\nEncuentro Latinoamericano de Antropología Digital 2023`

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
    const mesasPreferidas = Object.values(topTwo).map((mesa) => mapLabels[mesa[0]])
    let ponenciasPreferidas = []
    ponencias.filter(ponencia => ponencia.mesa === mesasPreferidas[0]).forEach(ponencia => ponenciasPreferidas.push(ponencia))
    ponencias.filter(ponencia => ponencia.mesa === mesasPreferidas[1]).forEach(ponencia => ponenciasPreferidas.push(ponencia))


  return <div className="full-height">
    {
      doneLoading?
        <WithBackground background={Background}> <div className="full-height">
          <WithFooter color="white">
            <div className="score-container animate__animated animate__fadeIn">

              <div className="col-10 col-lg-6">
                <p className="score-description">Según las respuestas que brindaste surge que tus intereses están más cercanos de los ejes:</p>
                <table className="table table-dark">
                    <thead>
                      <tr><th>🥇 {_.toUpper(mesasPreferidas[0])}</th></tr>
                      <tr><th>🥈 {_.toUpper(mesasPreferidas[1])}</th></tr>
                    </thead>
                </table>                
              </div>

              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-7">
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
                          { name: "E.T.M..", domain: [0, maxValue], getValue: (d) => d.metodologias },
                          { name: "C.L.D.", domain: [0, maxValue], getValue: (d) => d.contextos },
                          { name: "D.T.", domain: [0, maxValue], getValue: (d) => d.territorio },
                          { name: "I.E.P", domain: [0, maxValue], getValue: (d) => d.politico },
                          { name: "I.S.O.", domain: [0, maxValue], getValue: (d) => d.identidades },
                          { name: "P.G.L.", domain: [0, maxValue], getValue: (d) => d.genero },
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
                            fontSize: 14,
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
                          }
                        }}
                      >
                    <CircularGridLines tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)} />
                    </RadarChart>
                  </div>
                  <div className="col-md-5 text-start d-flex align-items-center ">
                    <p className="mx-4">
                      <h5>*Referencias de los ejes</h5>
                      E.T.M. = Enfoques Teóricos y Metodológicos <br />
                      C.L.D. = Contextos Laborales Digitalizados <br />
                      D.T. = Lo Digital en el Territorio <br />
                      I.E.P. = Internet como Espacio Político <br />
                      I.S.O. = Identidades y Subjetividades Online <br />
                      P.G.L. = Problemáticas de Género en Línea
                    </p>

                  </div>

                </div>

              </div>
            
              
              <div className="col-10">
                
                <p className="score-secondary-description">Agendá las siguientes ponencias que están dentro de estas mesas para que no te pierdas ninguna:</p>
                <div className="table-responsive mt-3">
                  <table className="table table-dark">
                    <thead>
                      <tr>
                        <th>Mesa</th>
                        <th>Título</th>
                        <th>Autores/as</th>
                        <th>Institución</th>
                      </tr>
                    </thead>
                    <tbody>
                    {ponenciasPreferidas.map(ponencia => <tr>
                      <td>{ponencia['mesa']}</td>
                      <td>{ponencia['titulo']}</td>
                      <td>{ponencia['autores']}</td>
                      <td>{ponencia['institucion']}</td>
                    </tr>)}                                       
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