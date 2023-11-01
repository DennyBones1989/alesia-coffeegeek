import React from "react";
import s from './Teacher.module.css';
import s2 from './../../App.module.css';
import teacherPhoto from "./../../img/teacher.jpg";
import { countries } from 'country-flag-icons';
import { PT } from 'country-flag-icons/react/3x2';
import { BY } from 'country-flag-icons/react/3x2';

const Teacher = (props) => {
    
    return <div><div className={s.teacherContainer}>
            <h1 className={s2.mainTitle}>Meet your teacher</h1>    
            <div className={s.teacherInfo}>   
                <h6>Alesia Zhvirblia</h6>
                <div className={s.teacherPhoto}>
                    <img src={teacherPhoto} alt={"Alesia Zhvirblia"}/>
                </div>
                <div className={s.teacherDescription}>
                I am a professional coffee trainer. Coffee is my passion and I share it through my coffee training program. From Belarus <BY title="Belarus" width={25} className=""/> Living in Portugal <PT title="Portugal" width={25} className=""/>
                <ul>
                    <li>10 years of experience in the coffee industry</li>
                    <li>7 years of experience as a coffee trainer</li>
                    <li>Portuguese Aeropress Vice-champion 2022</li>
                </ul>
                </div>
                
            </div>
                    
    </div></div>
}

export default Teacher;