import React from 'react';
//import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import s from './Certificate.module.css';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../carousel.css';

const CertificatesList = (props) => {
    

    //let reactSwipeEl;
    //debugger
    let items = props.certificates.map(certificate => <Certificate key={certificate.id} id={certificate.id} title={certificate.title}/>);
    const responsive = {
      0: { 
          items: 1
      },
      568: { 
          items: 2
      },
      1024: {
          items: 3, 
          itemsFit: 'contain'
      },
    };
    return (
        <div className={s.certificateSliderContainer}><AliceCarousel mouseTracking items={items} responsive={responsive} /></div>
      );
}

const Certificate = (props) => {
    //debugger
    return <div className={s.certHolder}>
            <div className={s.certificatePhoto}><img alt={props.title} src={require('./../../img/certificates/0'+props.id+'.jpg')}/></div>
            <div className={s.certificateTitle}><span>{props.title}</span></div>
        </div>
}

const mapStateToProps = (state) => {
    //debugger
    return{
        certificates: state.certificateReducer.certificatesList
    }
}

export default connect(mapStateToProps, {})(CertificatesList);