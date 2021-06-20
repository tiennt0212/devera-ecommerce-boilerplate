import React from 'react';
import PropTypes from 'prop-types';
import './content.css';
import { Icon } from '../Icon/icon';

export const Content = (props) => {
    const { icon, text } = props;
    return (
        <button type="button" className="content">
            {/* <p>{ icon }</p> */}
            { (args) => <Icon  {...args}/> }
            <p>{ text }</p>
        </button>
    );
}                                                                                                                                                                                                                                                                                                                                                                                                

Content.PropTypes ={
    icon: PropTypes.element,
    text: PropTypes.string.isRequired,
}

Content.defaultProps = {
    // icon: "PayPal icon",
    icon: null,
    text: "Paypal",
}