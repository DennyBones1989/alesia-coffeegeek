import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import s from './Course.module.css';
import s2 from './../../App.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FaTimes } from "react-icons/fa";
import { courseSubscribeTh, courseSubscribeFinishTh } from "../../redux/courseReducer";

const CoursesList = (props) => {
    //debugger
    return <div className={s.coursesContainer}>
        <h1 className={s2.mainTitle}>Choose your course</h1>
        <div className={s.coursesList}>
            {
                props.coursesList.map(c => <Course key={c.id} chosenCourse={props.chosenCourse} courseSubscribe={props.courseSubscribeTh} courseSubscribeFinish={props.courseSubscribeFinishTh} id={c.id} title={c.title} description={c.description} tags={c.tags} duration={c.duration} timeMetrics={c.timeMetrics} price={c.price} priceMetrics={c.priceMetrics} hoursPerDay={c.hoursPerDay} hoursPerDayMetrics={c.hoursPerDayMetrics} />)
            }
        </div>
    </div>
}

const TagsList = (props) => {
    return <span className={s.tag}>
        {props.label}
    </span>
}

const DescriptionList = (props) => {
    return <li>
        {props.label}
    </li>
}



const Course = (props) => {
    //debugger    
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        props.courseSubscribeFinish();
        setOpen(false)
    };

    return <div className={s.courseHolder}>
        <div className={s.topPanel}></div>
        <div className={s.courseHolderInner}>
            <div className={s.tagsContainer}>{props.tags.map(tag => <TagsList key={tag.id} label={tag.label} />)}</div>
            <h3>{props.title}</h3>
            <div className={s.courseDescription}>
                <ul>
                    {props.description.map(tag => <DescriptionList key={tag.id} label={tag.label} />)}
                </ul>
            </div>
            <div className={s.bottomPanel}>
                <div className={s.signupButtonContainer}><button onClick={() => {props.courseSubscribe({id:props.id, name: props.chosenCourse.name, email: props.chosenCourse.email, phone: props.chosenCourse.phone}, true); setOpen(o => !o);}}>Choose</button><Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className={s.modal}>
                        <a className={s.close} onClick={closeModal}>
                            <FaTimes/>
                        </a>
                        <ChoosePopup chosenCourse={props.chosenCourse} courseSubscribe={props.courseSubscribe} courseSubscribeFinish={props.courseSubscribeFinish} closeModal={closeModal} courseId={props.id}/>
                    </div>
                </Popup></div>
                <div className={s.metricsContainer}>
                    <span className={s.value}>€{props.price}</span>
                    <span className={s.valueMetrics}>{props.priceMetrics}</span>
                </div>
                <div className={s.metricsContainer}>
                    <span className={s.value}>{props.duration}</span>
                    <span className={s.valueMetrics}>{props.timeMetrics}</span>
                </div>
                <div className={s.metricsContainer}>
                    <span className={s.value}>{props.hoursPerDay}</span>
                    <span className={s.valueMetrics}>{props.hoursPerDayMetrics}</span>
                </div>
            </div>
        </div>

    </div>
}

const ChoosePopup = (props) => {
    let onSubmit = (formData) => {
        //debugger
        props.courseSubscribe({
            courseId:formData.courseId,
            participantName:formData.participantName,
            participantEmail:formData.participantEmail,
            participantPhone:formData.participantPhone,
        }, false);
    }

    let validate = (e) => {
        //alert('Lets validate!');
        return true;
    }

    const requiredField = (value) => {
        return (value) ? undefined : 'Field is required!';
    }

    const isValidEmail = (value)  => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return (emailRegex.test(value)) ? undefined : 'Please insert a valid email!';
      }

    const composeValidators = (...validators) => value => {
        return validators.reduce((error, validator) => error || validator(value), undefined);
    }

    return <div className={s.choosePopupContainer}>
        {!props.chosenCourse.subscribeSuccessfull && <div className={s.choosePopupContainerInner}>
            <div className={s.error}>{props.authError}</div>

            
            <h3 className={s.title}>Registration for course</h3>
            <span className={s.secondaryTitle}>Add you email and we will contact you.</span>
            <div className={s.form}>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={{
                        courseId: props.chosenCourse.id,
                        participantName: props.chosenCourse.name,
                        participantEmail: props.chosenCourse.email,
                        participantPhone: props.chosenCourse.phone

                    }}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="courseId" component="input" type="hidden"/>
                            
                                
                                <Field name="participantName" component="input" value={props.chosenCourse.name} validate={requiredField}>
                                    {({input, meta}) => (
                                        <div className={s.formFieldsHolder}>
                                            <label>Name</label>
                                            <input {...input} type="text" placeholder="Name" />
                                            {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                           
                            
                                
                                <Field name="participantEmail" type="email" value={props.chosenCourse.email} validate={composeValidators(requiredField, isValidEmail)}>
                                    
                                    {({input, meta}) => (
                                        <div className={s.formFieldsHolder}>
                                            <label>Email</label>
                                            <input {...input} type="text" placeholder="Email" />
                                            {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}
                                        </div>
                                    )}
                                    
                                </Field>
                            
                            
                                <Field name="participantPhone" component="input" type="phone" placeholder="Phone" validate={requiredField}>
                                    {({input, meta}) => (
                                        <div className={s.formFieldsHolder}>
                                            <label>Phone</label>
                                            <input {...input} type="number" placeholder="Phone"/>
                                            {meta.error && meta.touched && <span className={s.errorMessage}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            

                            {props.authError && <div className={s.error}>{props.authError}</div>}
                            <button className={s.sendButton} type="submit">Send</button>
                        </form>
                    )}
                />
            </div>
        </div>}
        {props.chosenCourse.subscribeSuccessfull && <div className={s.choosePopupContainerInner}>
             <div className={s.form}>
                <h3 className={s.title}>Thank you for registration</h3>      
                <span className={s.secondaryTitle}>We will contact you soon</span>   
                <button className={s.sendButton} type="button" onClick={props.closeModal}>Close</button>  
             </div>
             
        </div>}                
    </div>
}

const mapStateToProps = (state) => {
    //debugger
    return {
        coursesList:  state.courseReducer.coursesList,
        chosenCourse:  state.courseReducer.chosenCourse,
        
    }
}

/*const mapDispatchToProps = (dispatch) => {
    return {
        chooseCourse: (chosenCourse) => {
            dispatch(chooseCourseAC(chosenCourse))
        }
    }
}*/

export default connect(mapStateToProps, {courseSubscribeTh, courseSubscribeFinishTh})(CoursesList);