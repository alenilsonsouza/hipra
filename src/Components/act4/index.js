import React, {useState} from 'react';
import './index.css';

import Act4_1 from './act4_1';
import Act4_2 from './act4_2';
import Act4_3 from './act4_3';
import Act4_4 from './act4_4';

const Act4 = ({display}) => {

    const [act, setAct] = useState(1)

    const showAct = (act) => {
        setAct(act);
    }

    return (
        <div className="act4" style={{display:display}}>
            <div className="act4--menu">
                <div className={`act4--menu-item ${act === 1?'active':''}`} onClick={()=>{showAct(1)}}>
                    <img src="images/objetivos2.png" alt="" />
                    <span>Objetivos</span>
                </div>
                <div className={`act4--menu-item ${act === 2?'active':''}`} onClick={()=>{showAct(2)}}>
                    <img src="images/garantias.png" alt="" />
                    <span>Garantia de<br />Qualidade</span>
                </div>
                <div className={`act4--menu-item ${act === 3?'active':''}`} onClick={()=>{showAct(3)}}>
                    <img src="images/boas_pratica.png" alt="" />
                    <span>Boas Práticas<br />de Fabricação</span>
                </div>
                <div className={`act4--menu-item ${act === 4?'active':''}`} onClick={()=>{showAct(4)}}>
                    <img src="images/revisao.png" alt="" />
                    <span>Revisão de<br />Qualidade</span>
                </div>
            </div>
            <div className="act4--content" style={{backgroundImage:'url(images/fundo8.png)'}}>
                <div className="act4--content-all">
                    <Act4_1 css={act === 1?'block':'none'} />
                    <Act4_2 css={act === 2?'block':'none'} />
                    <Act4_3 css={act === 3?'block':'none'} />
                    <Act4_4 css={act === 4?'block':'none'} />
                </div>
            </div>
        </div>
    );
}

export default Act4;