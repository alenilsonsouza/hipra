import React, {useState} from 'react';
import './index.css';

const Act4_1 = ({css}) => {
    const [desc, setDesc] = useState(false)

    const openDescription = () =>{
        setDesc(true);
    }

    const closeDescription = () => {
        setDesc(false)
    }
    return (
        <div className="act4_sub act4_1" style={{display:css}}>
            <div className="act4_content">
                <div className="list">
                    <ul>
                        <li>
                            <img src="images/arrow.png" />
                            <span><span className="hover" style={{ color: '#339f33', fontWeight: 'bold' }}  onMouseOver={openDescription} onMouseOut={closeDescription}>Fabricar</span> de forma adequada</span>
                        </li>
                            <div className="list--description" style={{display:desc?'block':'none'}}>
                            Todas as operações de aquisição de materiais e produtos, de produção, de controle de qualidade, de aprovação, de armazenamento, de distribuição de medicamentos e os controles correspondentes a tais operações.
                            </div>
                        <li>
                            <img src="images/arrow.png" />
                            <span>Cumprir requisitos de comercialização</span>
                        </li>
                        <li>
                            <img src="images/arrow.png" />
                            <span>Evitar riscos</span>
                        </li>
                    </ul>
                </div>
                <div className="content2">
                    <h2>Responsabilidade compartilhada</h2>
                    <dvi className="content--items">
                        <div className="content--item">
                            <h3><span>Direção</span></h3>
                            <img src="images/direcao.png" alt="" />
                        </div>
                        <div className="content--item">
                            <h3><span>Departamentos<br /> da empresa</span></h3>
                            <img src="images/departamentos.png" alt="" />
                        </div>
                        <div className="content--item">
                            <h3><span>Fornecedores e <br />distribuidores</span></h3>
                            <img src="images/fornecedores.png" alt="" />
                        </div>
                    </dvi>
                </div>
            </div>
        </div>
    );
}

export default Act4_1;