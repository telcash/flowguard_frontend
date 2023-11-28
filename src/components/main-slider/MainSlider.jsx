import React from "react";
import './main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import dummyImg from '../../assets/slider-dummy.jpg';

const MainSlider = () => {
    return (
        <div className="fg__mainSlider">
            <Carousel fade>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;