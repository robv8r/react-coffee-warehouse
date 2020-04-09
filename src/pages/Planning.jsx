
import * as React from 'react';
import * as PropTypes from 'prop-types';

export default class Planning extends React.Component {
    static propTypes = {
        children: PropTypes.element
    };

    render() {
        const text = (
            <div id="Planning" className="main-content">
                <div className="card-container">
                    <h3 className="card-title">Team Calendar</h3>
                    <span></span>
                    <span></span>
                    <div className="card-component">SCHEDULER HERE:</div>
                </div>
            </div>
        );

        return (
            <div>
                {this.props.children ? this.props.children : text}
            </div>
        );
    }
}

