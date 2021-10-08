import React from 'react';
import './index.css';

const Act4 = () => {
    return (
        <div className="act4">
            <div className="act4--menu">
                <div className="act4--menu-item">
                    <img src="images/objetivos2.png" alt="" />
                    <span>Objetivos</span>
                </div>
                <div className="act4--menu-item">
                    <img src="images/garantias.png" alt="" />
                    <span>Garantia de<br />Qualidade</span>
                </div>
                <div className="act4--menu-item">
                    <img src="images/boas_pratica.png" alt="" />
                    <span>Boas Práticas<br />de Fabricação</span>
                </div>
                <div className="act4--menu-item">
                    <img src="images/revisao.png" alt="" />
                    <span>Revisão de<br />Qualidade</span>
                </div>
            </div>
            <div className="act4--content" style={{backgroundImage:'url(images/fundo8.png)'}}>
                <div className="act4--content-all"></div>
            </div>
        </div>
    );
}

export default Act4;