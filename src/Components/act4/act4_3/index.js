import React from 'react';
import './index.css';

const Act4_3 = ({css}) => {
    return (
        <div className="act4_sub act4_3" style={{display:css}}>
            <div className="act4--content">
                <div className="act4--content--line">
                    <h2>São um conjunto de ações e cuidados para garantir a qualidade</h2>
                    <div className="act4--listbol">
                        <img src="images/c_producao.png" alt="" className="bol"/>
                        <img src="images/seta.png" alt="" className="arrow"/>
                        <img src="images/c_controle_qualidade.png" alt="" className="bol" />
                        <img src="images/seta.png" alt="" className="arrow"/>
                        <img src="images/c_comercializacao.png" alt="" className="bol" />
                    </div>
                </div>
                <div className="act4--content--line">
                    <h2>Requisitos básicos das BPF</h2>
                    <div className="act4--list">
                        <div className="act4--list-col">
                            <ul>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Instruções e procedimentos escritos.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Clareza na definição dos processos.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Capacidade de produção homogênea.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Validação de processos críticos e alterações significativas.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Pessoal qualificado e treinado.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="act4--list-col">
                            <ul>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Instalações, equipamentos e serviços adequados.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Arquivos de dados de fabricação e investigação de desvios.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Controle do processo de distribuição.</span>
                                </li>
                                <li>
                                    <img src="images/arrow.png" alt="" />
                                    <span>Sistema de recolhimento de lotes e avaliação de reclamações.</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Act4_3;