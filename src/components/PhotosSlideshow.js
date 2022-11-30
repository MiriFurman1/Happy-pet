import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const responsiveSettings = [
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 300,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];
const PhotoSlideshow = () => {


    return (
        <Slide slidesToScroll={3} slidesToShow={3}  autoplay={true} responsive={responsiveSettings}>
            <div className="each-slide-effect" >
                <img alt="" src="/animals/about/alex-nicolopoulos-hxn2HjZHyQE-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
                <img alt="" src="/animals/about/alvan-nee-ZCHj_2lJP00-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
                <img alt="" src="/animals/about/ceyda-ciftci-GGD9KgalPkY-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
                 <img alt="" src="/animals/about/edgar-nKC772R_qog-unsplash.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/flouffy-HbrXSaaya14-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/howie-r-CjI_2QX7hvU-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/jamie-street-UtrE5DcgEyg-unsplash.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/lloyd-dirks-R1oSj2m-7Ks-unsplash.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/mcdobbie-hu-cjNaoIqbWCI-unsplash.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/modcatshop-pdALzg0yN-8-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/sgalagaev--5iSCtrJX5o-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/simion-andreea-marina-jDJ14ALPIK4-unsplash.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/ssACwfwq.jpg" ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/tim-van-der-kuip-mdRJhxlsuGM-unsplash.jpg"  ></img>
            </div>

            <div className="each-slide-effect">
            <img alt="" src="/animals/about/yoav-hornung-ulGabVbgA6s-unsplash.jpg" ></img>
            </div>

        </Slide>
    );
};

export default PhotoSlideshow;