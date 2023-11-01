import React from "react";
import { connect } from 'react-redux';
import s from './Program.module.css';
import s2 from './../../App.module.css';
import coffeeBean from './../../img/coffee-bean.svg';

const ProgramsList = (props) => {
    //debugger;
    

    return <div className={s.programsHolder}>
                <h1 className={s2.mainTitle}>Programs for everyone</h1>
                <div className={s.programsList}>
                    {props.programsList.map(p => <Program key={p.id} id={p.id} title={p.title} content={p.content}/>)}
                </div>
    </div>
}

const Bean = (props) => {
    return <div>
            <img src={coffeeBean} alt="bean-icon" width="31" height="31"/>
    </div>
    
}

let Beans = (props) =>{
    let beansArr = [];
    for (let i = 1; i<=props.id; i++){
        beansArr.push(<Bean key={i}/>)
    }
    return beansArr;
}

const Program = (props) => {
    

    return <div className={s.program}>
        <div className={s.beansContent}>{Beans({id:props.id})}</div>
        <h5>{props.title}</h5>
        <div className={s.programText}>
            {props.content}
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return{
        programsList: state.programReducer.programsList
    }
}

export default connect(mapStateToProps,{})(ProgramsList);