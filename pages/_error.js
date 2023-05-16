import React, { Component } from 'react';
import PropTypes from 'prop-types';

import gridSystem from '../components/_SassLib/Grid/Grid.module.scss'; 

class Error extends Component {
  static getInitialProps({ res, err }) {
    // eslint-disable-next-line
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  static propTypes = {
    statusCode: PropTypes.number
  };

  static defaultProps = {
    statusCode: 'Unknown'
  };

  render() {
    return (
      <div className={`${gridSystem.mainGrid}`}>
        <div className={`${gridSystem.mainGrid_contentBox}`} style={{ marginTop: '16px', padding: '16px' }}>
          {this.props.statusCode
            ? `Error ${this.props.statusCode} en el servidor.`
            : 'Oops, falló la aplicacíon.'}
        </div>
      </div>
    );
  }
}

export default Error;
