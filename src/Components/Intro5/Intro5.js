import React from 'react';
import './Intro5.css';
import Background from '../../images/fundo4.png';

const Intro5 = ({display}) => {
    return (
        <div className="intro5" style={{ backgroundImage: `url(${Background})`, display:display }}>
            <div className="intro5--linha">
                <div className="linha--item"><span>B</span>oas</div>
                <div className="linha--item"><span>P</span>ráticas de</div>
                <div className="linha--item"><span>F</span>abricação</div>
            </div>
            <div className="intro5--meio">
                <div className="meio--item">BPF</div>
                <div className="meio--item">=</div>
                <div className="meio--item">GMP</div>                
            </div>
            <div className="intro5--linha">
                <div className="linha--item"><span>G</span>ood</div>
                <div className="linha--item"><span>M</span>anifacturing</div>
                <div className="linha--item"><span>P</span>ractices</div>
            </div>
        </div>
    );
}

export default Intro5;