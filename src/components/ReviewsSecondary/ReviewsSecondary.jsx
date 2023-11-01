import React from "react";
import { connect } from 'react-redux';
import s from './ReviewsSecondary.module.css';
import ava from './img/ava.png';
import img1 from './img/img03.png';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const delay = 2000;

const ReviewsSecondary = (props) => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === props.reviewsSecondaryList.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);



    return <div className={s.reviewsContainer}> 
           <div className={s.slideshow}>
                <div
                    className={s.slideshowSlider}
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {props.reviewsSecondaryList.map( r => (
                        <Review key={r.id} item={r} />
                    ))}
                </div>
                </div>
            </div>
    
}


const Review = (props) => {
    return <div className={s.reviewSecondaryContainer}>
    <div className={s.reviewAuthorAva}>
        <img src={ava} alt={props.item.name}/>
    </div>
    <div className={s.reviewAuthorContent}>
        <div className={s.photos}>
            <img alt="img" src={img1} width="360" height="240"/>
        </div>
        <div className={s.reviewText}>
            {props.item.content}
        </div>
    </div>
</div>
}

let mapStateToProps = (state) => {
    return{
        reviewsSecondaryList: state.reviewsSecondaryReducer.reviewsSecondaryList
    }
}
export default connect(mapStateToProps, {})(ReviewsSecondary);