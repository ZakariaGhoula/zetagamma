import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import Autocomplete from '../autocomplete/Autocomplete';
export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
        this.state = {
            transform:0,
            scrollPosition:0
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        console.log(window.scrollY);
        if (window.scrollY > 100) {
            console.log("should lock");
            this.setState({
                scrollPosition: window.scrollY
            });
        } else if (window.scrollY < 100) {
            console.log("not locked" );
            this.setState({
                scrollPosition: window.scrollY
            });
        }


    }

    render() {
        return (
                <section className="timeline container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <Autocomplete/>
                        </div>
                    </div>


                    <div className="fixed">
                    <img src={'images/default-placeholder.png'}
                         className="retina_can placeholder" id="img_perso_time_line"/>
                        </div>
                </section>


        );
    }
}