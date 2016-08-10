import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';


export default class MainSlider extends React.Component {
    render() {
        return (
                <div className="main-slider">
                <div className="video-container">
                    <video preload={true} autoPlay loop volume="0" poster={'video/main-slider/Slider-rogner2.png'}>
                        <source src={'video/main-slider/Slider-rogner2.webm'} type="video/webm"/>
                        <source src={'video/main-slider/Slider-rogner2.mp4'} type="video/mp4"/>
                    </video>
                </div>
                </div>


        );
    }
}