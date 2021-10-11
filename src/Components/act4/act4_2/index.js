import React from 'react';
import './index.css';

const Act4_2 = ({ css }) => {
    return (
        <div className="act4_sub act4_2" style={{ display: css }}>
            <div className="act4--content">
                <div className="act4--linha">
                    <div className="act4--linha-item">
                        <h4>Pessoal</h4>
                        <img src="images/pessoal.png" alt="" />
                    </div>
                    <div className="act4--linha-item">
                        <h4>Materiais</h4>
                        <img src="images/materias.png" alt="" />
                    </div>
                </div>
                <div className="act4--linha linha--meio">
                    <div className="act4--linha-item">
                        <h4>Área e<br />serviços</h4>
                        <img src="images/area_servico.png" alt="" />
                    </div>
                    <div className="act4--linha-item">
                        <h4></h4>
                        <img src="images/c_qualidade.png" alt="" />
                    </div>
                    <div className="act4--linha-item">
                        <h4>Equipamentos <br />e máquinas</h4>
                        <img src="images/equipamentos_e_maquinas.png" alt="" />
                    </div>
                </div>
                <div className="act4--linha">
                    <div className="act4--linha-item">
                        <h4>Métodos<br />e processos</h4>
                        <img src="images/metodo_processo.png" alt="" />
                    </div>
                    <div className="act4--linha-item">
                        <h4>Documentação</h4>
                        <img src="images/documentacao.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Act4_2;