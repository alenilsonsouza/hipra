import React, {useState} from 'react';
import './index.css';
import Background from '../../images/fundo5.png';

const Act1 = () => {

    const [desc, setDesc] = useState(false)

    const openDescription = () =>{
        setDesc(true);
    }

    const closeDescription = () => {
        setDesc(false)
    }
    return (
        <div className="act1" style={{ backgroundImage: `url(${Background})` }}>
            <div className="act1--content">

                <h2 className="title">Classificação de deficiência</h2>
                <div className="list">
                    <ul style={{ listStyle: 'none' }}>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Responsabilidades do pessoal chave</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Segregação entre processos</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span><span style={{ color: '#339f33', fontWeight: 'bold' }} className="hover" onMouseOver={openDescription} onMouseOut={closeDescription}>Procedimentos</span> escritos e registros documentados</span>
                            <div className="list--description" style={{display:desc?'block':'none'}}>
                                Descrição das operações a serem realizadas, cuidados a serem tomados e medidas a serem aplicadas, relacionadas direta ou indiretamente com a fabricação de um medicamento.
                            </div>
                        </li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Qualificação de equipamento</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Auditorias de fornecedores</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Contaminação microbiológica</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Processo de validação</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Identificação de processos, equipamentos e instalações</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Controle ambiental</span></li>
                        <li><span><img src="images/arrow.png" alt="" /></span><span>Sistemas informatizados - controle e documentação</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Act1;