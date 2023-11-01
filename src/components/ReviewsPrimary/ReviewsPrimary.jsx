import React from "react";
import s from './ReviewsPrimary.module.css';
import s2 from './../../App.module.css';
import { connect } from 'react-redux';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import kostya from "./../../img/reviewsPrimary/Kostya.png";

const Review = (props) => {
    return <div className={s.reviewContainer}>
                <div className={s.reviewContent}>
                    <div className={s.reviewTextContent}>
                        <h1 className={s.mainTitle+" "+s2.mainTitle}>What people say</h1>
                        <div className={s.reviewTextBlock}>
                            <div className={s.reviewText}>
                                {props.content}
                            </div>
                            <div className={s.reviewName}>
                                - {props.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.reviewPhoto}><img alt="Kostya" src={kostya}/></div>
           </div>
}

const ReviewsPrimary = (props) => {
    
    return <div className={s.reviewsContainer}>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        props.reviewsPrimaryList.map(r => <SwiperSlide key={r.id}><Review key={r.id} name={r.name} ava={r.ava} content={r.content} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
}

const mapStateToProps = (state) => {
    return {
        reviewsPrimaryList: state.reviewsPrimaryReducer.reviewsPrimaryList
    }
}

export default connect(mapStateToProps, {})(ReviewsPrimary);