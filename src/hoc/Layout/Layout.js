import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary/Auxilary';

import Header from '../../containers/Header/Header';
import Content from '../../containers/Content/Content';
import Footer from '../../containers/Footer/Footer';

export class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header/>
        <Content/>
        <Footer/>
      </Aux>
    );
  }
}

export default Layout;
