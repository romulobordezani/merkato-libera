import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
  // Method used by next.js on runtime
  // eslint-disable-next-line
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  // eslint-disable-next-line
  static propTypes = {
    statusCode: PropTypes.number
  };

  static defaultProps = {
    statusCode: 'Unknown'
  };

  render() {
    return (
      <Fragment>
        {this.props.statusCode
          ? `Error ${this.props.statusCode} en el servidor.`
          : 'Oops, falló la aplicaccíon.'}
      </Fragment>
    );
  }
}

export default Error;
