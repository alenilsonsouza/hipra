import React from 'react';
import './Intro3.css';
import Background from '../../images/fundo2.png'

const Intro3 = ({display}) => {
    return (
        <div className="intro3" style={{backgroundImage:`url(${Background})`, display: display}}>
            <div className="intro3--title">
                <h2>BPF</h2>
                <p>
                    <span>B</span>oas<br />
                    <span>P</span>ráticas de<br />
                    <span>F</span>abriacação de <br />
                    <span>M</span>edicamentos
                </p>
            </div>
            <div className="intro3--icons">
                <img src="images/people.png" alt="" />
                <img src="images/slug.png" alt="" />
                <img src="images/search.png" alt="" />
                <img src="images/square.png" alt="" />
                <img src="images/word.png" alt="" />
            </div>
        </div>
    );
}

export default Intro3;