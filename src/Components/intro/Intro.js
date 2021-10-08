import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <>
        <div className="intro-area">
            <div className="intro-questions">
                <div className="intro--item">
                    <div className="intro--item-logo">
                        <img src="images/phone.png" alt="" />
                    </div>
                    <div className="intro--item-text">Este curso possui áudios. Verifique o seu sistema de áudio ou fones de ouvido antes de iniciar.</div>
                </div>
                <div className="intro--item">
                    <div className="intro--item-logo">
                        <img src="images/lock.png" alt="" />
                    </div>
                    <div className="intro--item-text">A navegação é sequencial. Até que todo conteúdo da tela e áudio não seja exibido, você não poderá avançar, mas poderá revisar o conteúdo que já foi visitado.</div>
                </div>
                <div className="intro--item">
                    <div className="intro--item-logo">
                        <img src="images/paste.png" alt="" />
                    </div>
                    <div className="intro--item-text">Ao final do módulo, você encontrará um teste de conhecimentos. Para ser aprovado, deverá superar 80% de acertos.</div>
                </div>
                <div className="intro--item">
                    <div className="intro--item-logo">
                        <img src="images/setting.png" alt="" />
                    </div>
                    <div className="intro--item-text">Os conteúdos podem ser apresentados na forma de atividades ou exercícios que você deve resolver para continuar.</div>
                </div>
                <div className="intro--item">
                    <div className="intro--item-logo">
                        <img src="images/mark.png" alt="" />
                    </div>
                    <div className="intro--item-text">Este curso contém um glossário interativo. Você poderá buscar a definição das palavras neste ícone, colocando o mouse sobre elas.</div>
                </div>
            </div>
            <div className="intro-button">
                <button>Começar</button>
            </div>
        </div>
        </>
    );
}

export default Intro;