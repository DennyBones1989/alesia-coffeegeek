import React from "react";
import s from './Gallery.module.css';
import img1 from "./../../img/gallery/img01.jpg";
import img2 from "./../../img/gallery/img02.jpg";
import img3 from "./../../img/gallery/img03.jpg";
import img4 from "./../../img/gallery/img04.jpg";

const Gallery = (props) => {
    return  <div className={s.photoGallery}>
                <div className={s.imageRow}>
                    <div className={s.imageContainer}><img alt="Image 1" src={img1}/></div>
                    <div className={s.imageContainer}><img alt="Image 2" src={img2}/></div>
                </div>
                <div className={s.imageRow}>
                    <div className={s.imageContainer}><img alt="Image 3" src={img3}/></div>
                    <div className={s.imageContainer}><img alt="Image 4" src={img4}/></div>
                </div>   
            </div>
}


export default Gallery;