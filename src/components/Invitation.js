// Code Invitation Component Here
//

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Invitation extends React.Component {

        render() {

		return (
			<div>
				<h1>You've been invited!</h1>
				{this.props.children}
			</div>
      			);

        }

};

//Invitation.defaultProps = {
//        hasWatermark: false
//};

//Invitation.propTypes = {
//        name: PropTypes.string.isRequired,
//        producer: PropTypes.string,
//        hasWatermark: PropTypes.bool,
//        color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
//        weight: PropTypes.oneOf([...Array(300).keys()].slice(80,300)).isRequired
//    };

export default Invitation;
