import React, {useState} from 'react';
import './index.css';

const Act4_4 = ({css}) => {
    const [desc, setDesc] = useState(false)

    const openDescription = () =>{
        setDesc(true);
    }

    const closeDescription = () => {
        setDesc(false)
    }
    return (
        <div className="act4_sub act4_4" style={{display:css}}>
            <div className="act4--content">
                <div className="column--act">
                    <div className="item--list">
                        <div className="img">
                            <img src="images/objetivos_blue.png" alt="" />
                            <span>Objetivos</span>
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Detectar tendências relevantes.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Identificar melhorias em processos e produtos.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Verificar a consistência dos processos.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Controlar correspondência com especificações.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="item--list">
                        <div className="img">
                            <img src="images/tarefas_blue.png" alt="" />
                            <span>Tarefas que inclui</span>
                        </div>
                        <div className="list">
                            <ul>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão das matérias primas e <span style={{ color: '#339f33', fontWeight: 'bold' }} className="hover" onMouseOver={openDescription} onMouseOut={closeDescription}>materiais de acondicionamento.</span></span>
                                </li>
                                <div className="list--description" style={{display:desc?'block':'none'}}>
                                Qualquer material empregado no acondicionamento de medicamentos, exceto embalagens utilizadas para o transporte ou envio. O material de acondicionamento se classifica em primário ou secundário, conforme esteja ou não em contato com o produto.
                            </div>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão de controles críticos do processo.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Resultados do produto acabado.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão de lotes não conformes.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão de mudanças nos métodos analíticos e processos.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão de resultados do programa de estabilidade.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Revisão de devoluções, reclamações e retiradas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Act4_4;