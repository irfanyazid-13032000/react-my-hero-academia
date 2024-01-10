// import React from 'react'
import bnha from '../assets/image/bnha.jpg';
import aoyama from '../assets/image/aoyama yuga.jpg';
import ashido from '../assets/image/Mina_Ashido_Portrait.jpg';
import denki from '../assets/image/Denki_Kaminari_Portrait.jpg';
import asui from '../assets/image/Tsuyu_Asui_Portrait.jpg';
import iida from '../assets/image/Tenya_Iida_Portrait.jpg';
import eijirou from '../assets/image/Eijirou_Kirishima_Portrait.jpg';
import fumikage from '../assets/image/Fumikage_Tokoyami_Portrait.jpg';
import hanta from '../assets/image/Hanta_Sero_Portrait.jpg';
import izuku from '../assets/image/Izuku_Midoriya_Portrait.jpg';
import katsuki from '../assets/image/Katsuki_Bakugo_Portrait.jpg';
import kouji from '../assets/image/Kouji_Kouda_Portrait.jpg';
import kyouka from '../assets/image/Kyouka_Jirou_Portrait.jpg';
import mashirao from '../assets/image/Mashirao_Ojiro_Portrait.jpg';
import mezo from '../assets/image/Mezo_Shoji_Portrait.jpg';
import minoru from '../assets/image/Minoru_Mineta_Portrait.jpg';
import momo from '../assets/image/Momo_Yaoyorozu_Portrait.jpg';
import ochaco from '../assets/image/Ochaco_Uraraka_Portrait.jpg';
import rikido from '../assets/image/Rikido_Sato_Portrait.jpg';
import shoto from '../assets/image/Shoto_Todoroki_Portrait.jpg';
import tooru from '../assets/image/Tooru_Hagakure_Portrait.jpg';
import "../style/Heroes.css";
import Marquee from "react-fast-marquee";
const images = [aoyama,ashido,asui,iida,denki,eijirou,fumikage,hanta,izuku,katsuki,kouji,kyouka,mashirao,mezo,minoru,momo,ochaco,rikido,shoto,tooru];


export const Hero = () => {



  const ScrollingGallery = () => {
    return (
      <div className="scrolling-gallery mb-3">
        <Marquee>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="img-thumbnail" />
        ))}
        </Marquee>
      </div>
    );
  };
  
  return (
    <div>
        <div className="px-4 text-center" style={{ backgroundColor: 'rgb(64, 79, 161)' }}>
        <img className="d-block mx-auto mb-4 py-5" src={bnha} alt="" width="300"></img>
        <h1 className="display-5 fw-bold" style={{ color: 'aliceblue' }}>Centered hero</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4" style={{ color: 'aliceblue' }}>Sara ni mukou e, plus ultra</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center py-5">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Hero</button>
              <button type="button" className="btn btn-success btn-lg px-4">Heroin</button>
            </div>

            <div className='gallery'>
            <ScrollingGallery></ScrollingGallery>  
            </div>
              
        </div>
      </div>
    </div>
  )
}
