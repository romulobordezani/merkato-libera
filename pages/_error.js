import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from "../components/Layout";

class Error extends Component {
  // Method used by next on runtime
  // eslint-disable-next-line
  static getInitialProps({ res, err }) {
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
      <Layout>
        {this.props.statusCode
          ? `Erro ${this.props.statusCode} no servidor.`
          : 'Oops, ocorreu um erro na aplicação.'}
      </Layout>
    );
  }
}

export default Error;
