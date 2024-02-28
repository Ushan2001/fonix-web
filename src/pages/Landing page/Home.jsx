import React, { Component } from 'react'
import Header from '../../component/header section/Header'
import Service from '../../component/Our Service/Service'
import Contact from '../../component/Contact us/Contact'
import Awards from '../../component/Awards/Awards'
import Company from '../../component/Company/Company'
import Product from '../../component/Product/Product'
import Footer from '../../component/Footer/Footer'
import DetailsBar from '../../component/Deails Bar/DetailsBar'


export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <br/><br/>
        <Awards/>
        <br/><br/><br/>
        <Service/>
        <br/><br/>
        <Company/>
        <br/><br/>
        <Product/>
        <br/><br/>
        <DetailsBar/>
        <br/><br/>
        <Contact/>
        <br/><br/>
        <Footer/>

      </div>
    )
  }
}
