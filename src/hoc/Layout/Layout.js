import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary/Auxilary';

import Header from '../../containers/Header/Header';
import Content from '../../containers/Content/Content';
import Footer from '../../containers/Footer/Footer';

import classes from './Layout.module.css';

export class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header/>
        <main className={classes.classes}>
          
        </main>
        <Content/>
        <Footer/>
      </Aux>
    );
  }
}

export default Layout;
