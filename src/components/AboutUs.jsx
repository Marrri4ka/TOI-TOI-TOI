import React from 'react';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
class AboutUs extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="services">
  
    <div class="service-container sc1">
        <div class="service-icons">
            <svg class="svg-strategie">
                <path class="str-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M18.5,5.8c-7.7,0-14.4,5.6-15.9,13.2"></path>
                <path class="str-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M25.2,28.8h-5.6c-0.3,0-0.5-0.2-0.5-0.5V11.5c0-0.3,0.2-0.5,0.5-0.5 h5.6c0.3,0,0.5,0.2,0.5,0.5v16.8C25.7,28.6,25.5,28.8,25.2,28.8L25.2,28.8z"></path>
                <path class="str-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M16,28.8h-5.6c-0.3,0-0.5-0.2-0.5-0.5v-9.6c0-0.3,0.2-0.5,0.5-0.5H16 c0.3,0,0.5,0.2,0.5,0.5v9.6C16.5,28.6,16.3,28.8,16,28.8L16,28.8z"></path>
                <path class="str-path4" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M6.8,28.8H1.2c-0.3,0-0.5-0.2-0.5-0.5v-4.4c0-0.3,0.2-0.5,0.5-0.5h5.6 c0.3,0,0.5,0.2,0.5,0.5v4.4C7.4,28.6,7.1,28.8,6.8,28.8L6.8,28.8z"></path>
                <path class="str-path5" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M15.3,1.4l4.1,4.1c0.2,0.2,0.2,0.5,0,0.7 l-4.1,4.1"></path>
            </svg>
            <svg class="arrow-right ar1" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-strategie">Strategie</h1>
        <p class="p-strategie">Langfristige Strategieentwicklung anstelle von kurzzeitigem Aktionismus ist der Eckpfeiler auf dem erfolgreiche Projekte aufbauen. Wir beraten Sie schonungslos ehrlich und und haben dabei das große Ganze und die kleinen Details, die Erfolg bestimmen, im Blick.</p>
    </div>

    <div class="service-container sc2">
        <div class="service-icons">
            <svg class="svg-marketing">
                <path class="ma-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M22.7,35.6H1.4c-0.4,0-0.8-0.3-0.8-0.8V1.4c0-0.4,0.3-0.8,0.8-0.8 h21.3c0.4,0,0.8,0.3,0.8,0.8v33.5C23.5,35.3,23.1,35.6,22.7,35.6L22.7,35.6z"></path>
                <path class="ma-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M19.7,26.5H4.4c-0.4,0-0.8-0.3-0.8-0.8V6.4C3.7,6,4,5.7,4.4,5.7h15.2 c0.4,0,0.8,0.3,0.8,0.8v19.3C20.4,26.1,20.1,26.5,19.7,26.5L19.7,26.5z"></path>
                <circle class="ma-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="12.1" cy="31" r="1.8"></circle>
            </svg>
            <svg class="arrow-right ar2" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-marketing">Digital Marketing</h1>
        <p class="p-marketing">Clickbaiting und Fans sammeln war gestern, heute geht es um die nahtlose Vernetzung von Kommunikation und Marketing. Überzeugen Sie durch nachhaltiges Inbound-Marketing und begleiten Sie Ihre Kunden über die gesamte Customer Journey und sämtliche Touchpoints hinweg. </p>
    </div>

    <div class="service-container sc3">
        <div class="service-icons">
            <svg class="svg-design">
                <path class="de-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M35.3,1.1L33,1.5c-0.2,0-0.4,0.1-0.5,0.3L15.4,18.1 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0-0.6,0.2-0.7,0.4l-6,6.8c-0.2,0.2-0.2,0.5-0.2,0.7 c-0.4-0.2-0.9-0.3-1.4-0.3c-1.1,0-2.5,0.5-3.3,1.3c-1.2,1.2-1.1,4.4-2.4,6.8c-0.2,0.3,0,0.7,0.3,0.9c0.2,0.2,0.4,0.3,0.7,0.3 c0.1,0,0.1,0,0.2,0l3-0.9c0.7-0.2,3-0.8,3.8-1.6c1.2-1.2,1.4-3.2,1-4.7c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2l6.8-5.8 c0.2-0.2,0.4-0.4,0.4-0.7c0,0,0,0,0-0.1c0,0,0,0,0,0h0c0.3,0,0.5-0.1,0.7-0.3L35.3,4.5c0.1-0.1,0.2-0.3,0.3-0.5L36,1.7 C36.1,1.4,35.7,1,35.3,1.1z"></path>
            </svg>
            <svg class="arrow-right ar3" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-design">Design & Grafik</h1>
        <p class="p-design">Der erste Eindruck zählt. Wir verhelfen Ihrer Marke im Gedächtnis zu bleiben, verpassen Ihrer Website einen neuen Anstrich oder übernehmen die Entwickung des gesamten Corporate Designs. In jedem Fall positionieren wir Sie im besten Licht. </p>
    </div>


    <div class="service-container sc4">
        <div class="service-icons">
            <svg class="svg-ux">
                <path class="ux-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M21.3,35.8c-0.1,0-0.3,0-0.4-0.1c0,0-0.1-0.1-0.1-0.1 c-0.1,0-0.3-0.2-0.6-0.4c-1.3-0.9-4.4-3.1-6.5-4.7C6,24.5,2,20.1,1.2,17c-0.4-1.1-0.6-2.4-0.6-3.7c0-3.4,1.2-6.7,3.5-9.1 C6.3,2.2,9,1,11.9,1h0c3.6,0,6.9,1.6,9,4.4c2.1-2.9,5.3-4.6,8.9-4.7l0.2,0c6.1,0,11.2,5.4,11.3,12.1c0,1.3-0.2,2.5-0.5,3.7 c-0.6,3.1-4.7,7.7-12,13.8c-2.9,2.4-5.3,4.2-7,5.3C21.6,35.7,21.4,35.8,21.3,35.8L21.3,35.8z"></path>
                <path class="ux-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M29.9,6.2L29.9,6.2c3.3,0,6,3,6,6.7c0,0.7-0.1,1.5-0.3,2.2"></path>
            </svg>
            <svg class="arrow-right ar4" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-ux">User Experience</h1>
        <p class="p-ux">Großartiges Interface-Design ist keine Frage des Geschmacks. Wir halten uns lieber an vier kleine Worte, die über den Erfolg entscheiden: Usability, Accessibility, Performance und Ästhetik. </p>
    </div>

    <div class="service-container sc5">
        <div class="service-icons">
            <svg class="svg-acc">
                <path class="acc-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M12.5,24C6.1,24,0.8,18.8,0.8,12.4C0.8,6,6.1,0.7,12.5,0.7 c4.3,0,8.2,2.4,10.3,6.2h16.6c3,0,5.5,2.5,5.5,5.5c0,2.7-2,5-4.7,5.4l-0.4,0.1l-0.3-0.3l-1.7-1.9l-2.2,2.5l-2.2-2.5l-1.9,2.1 L31,17.9h-8.3C20.7,21.6,16.7,24,12.5,24L12.5,24z"></path>
                <path class="acc-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M9.4,14.9c-1.4,0-2.5-1.1-2.5-2.5S8,9.8,9.4,9.8 c1.4,0,2.5,1.1,2.5,2.5S10.8,14.9,9.4,14.9L9.4,14.9z"></path>
            </svg>
            <svg class="arrow-right ar5" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-acc">Accessibility</h1>
        <p class="p-acc">Jeder Mensch hat ein Anrecht auf Information. Intuitive Navigation, responsive Design und semantisch korrekt erstellte Inhalte sind die Zutaten für Accessibility. Wir kennen uns mit Barrierefreiheit aus und garantieren, dass alle Inhalte Ihrer Website optimal erreichbar sind.</p>
    </div>

    <div class="service-container sc6">
        <div class="service-icons">
            <svg class="svg-dev">
                <circle class="dev-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="6" cy="27.5" r="4.9"></circle>
                <circle class="dev-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="20.3" cy="6" r="4.9"></circle>
                <circle class="dev-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="34.6" cy="27.5" r="4.9"></circle>
                <line class="dev-path4" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" x1="22.9" y1="10.3" x2="32" y2="23.1"></line>
                <line class="dev-path5" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" x1="17.7" y1="10.3" x2="8.5" y2="23.2"></line>
            </svg>
            <svg class="arrow-right ar6" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-dev">Development</h1>
        <p class="p-dev">Wir sind eine der führenden Drupal-Agenturen des Landes. Und stolz darauf. Wir setzen auf Open Source Lösungen, lieben es mit neuen Technologien zu arbeiten und reizen dabei das mögliche unter Einhaltung höchster Usability, aus. So wird jedes Projekt zum Masterpiece. </p> </div>


</div>
    );
  }
}



export default AboutUs;
