import React from 'react';
import './Intro2.css';
import Background from '../../images/fundo.png';

const Intro2 = () => {
    return (
        <div className="intro2" style={{backgroundImage:`url(${Background})`}}>
            <div className="intro2--text">Curso de <br />Introdução às<br />Boas Práticas<br />de Fabricação<br /> <span className="intro2--textmini">BPF</span></div>
        </div>
    );
}

export default Intro2;