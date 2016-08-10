import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';



export default class Map extends React.Component {

    constructor(props) {
        super(props);

this.onMapCreated = this.onMapCreated.bind(this);
this.onDragEnd = this.onDragEnd.bind(this);
this.onCloseClick = this.onCloseClick.bind(this);
this.onClick = this.onClick.bind(this);

    }
    onMapCreated(map) {
        map.setOptions({
            disableDefaultUI: true
        });
    }

    onDragEnd(e) {
        console.log('onDragEnd', e);
    }

    onCloseClick() {
        console.log('onCloseClick');
    }

    onClick(e) {
        console.log('onClick', e);
    }


    render() {
/* <InfoWindow
 lat={this.props.lat}
 lng={this.props.lng}
 content={'Hello, React :)'}
 onCloseClick={this.onCloseClick.bind(this)} />
 <Circle
 lat={this.props.lat}
 lng={this.props.lng}
 radius={500}
 onClick={this.onClick.bind(this)} />*/

        return (
            <div className="map" >
                <Gmaps
                    width={'100%'}
                    height={'600px'}
                    lat={this.props.lat}
                    lng={this.props.lng}
                    zoom={12}
                    loadingMessage={'Be happy'}
                    params={{v: '3.exp'}}
                    onMapCreated={this.onMapCreated.bind(this)}>
                    <Marker
                        lat={this.props.lat}
                        lng={this.props.lng}
                        draggable={true}
                        onDragEnd={this.onDragEnd.bind(this)} />

                </Gmaps>


            </div>
        )
            ;
    }
}