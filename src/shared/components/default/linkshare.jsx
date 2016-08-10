import React from 'react';
import { Link } from 'react-router';


export default class LinkShare extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        //  var m = moment();

        return (

            <div id="link_share" itemScope="" itemType="http://schema.org/Organization">
                <link itemProp="url" href="http://www.doitinparis.com" />
                <a itemProp="sameAs" href="https://www.facebook.com/Doitinparis" target="_blank"
                   title="facebook" id="facebook">
                    <i className="fa fa-2x fa-facebook"></i>
                </a>
                <a itemProp="sameAs" href="https://twitter.com/Doitinparis" target="_blank"
                   title="twitter" id="twitter">
                    <i className="fa fa-2x fa-twitter"></i>
                </a>
                <a itemProp="sameAs" href="https://instagram.com/doitin_paris/" target="_blank"
                   title="instagram" id="insta">
                    <i className="fa fa-2x fa-instagram"></i>
                </a>
                <a itemProp="sameAs" href="https://www.pinterest.com/doitinparis/" target="_blank"
                   title="pinterest" id="pinter">
                    <i className="fa fa-2x fa-pinterest-p"></i>
                </a>
                <a itemProp="sameAs" href="https://plus.google.com/+Doitinparisofficiel/posts"
                   target="_blank" title="google +" id="googleplus">
                    <i className="fa fa-2x fa-google-plus"></i>
                </a>

            </div>


        );
    }
}
