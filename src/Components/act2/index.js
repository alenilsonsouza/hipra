import React from 'react';
import './index.css';

const Act2 = ({display}) => {
    return (
        <div className="act2" style={{backgroundImage:'url(images/fundo6.png)', display:display}}>
            <div className="act2--content">
                <h2 className="act2--title">Pessoal Envolvido</h2>
                <p>Responsável por conhcer e cumprir as <span>B</span>oas <span>P</span>ráticas de <span>F</span>abricação.</p>
            </div>
        </div>
    );
}

export default Act2;