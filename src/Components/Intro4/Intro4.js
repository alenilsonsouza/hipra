import React from 'react';
import './Intro4.css';
import Background from '../../images/fundo3.png';

const Intro4 = ({display}) => {
    return (
        <div className="intro4" style={{ backgroundImage: `url(${Background})`, display:display }}>
            <div className="intro4--content">
                <div className="left">
                    <div className="left--image">
                        <img src="images/book.png" alt="" />
                    </div>
                    <div className="left--text">Conteúdo</div>
                </div>
                <div className="right">
                    <p>Introdução às BPF</p>

                    <p>Requisitos para fabricação<br />
                        de medicamentos</p>

                    <p>Sistema de qualidade<br />
                        farmacêutica</p>

                    <p>Pessoal</p>

                    <p>Áreas e Equipamentos</p>
                    <p className="image--text"><img src="images/watch.png" alt="" /><span>30 minutos</span></p>
                </div>
            </div>
        </div>
    );
}

export default Intro4;