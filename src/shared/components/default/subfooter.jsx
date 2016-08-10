import React from 'react';
import { Link } from 'react-router';
import LinkShare from './linkshare';

export default class SubFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        //  var m = moment();

        return (
            <div className="footer" id="subfooter">
                <div className="container">
                    <div className="col-xs-12">
                        <LinkShare/>
                    </div>
                </div>
            </div>


        );
    }
}
