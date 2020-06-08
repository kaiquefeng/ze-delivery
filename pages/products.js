import React from 'react';


import Header from '../components/Header';
import Footer from '../components/Footer';

import imgBebida from '../assets/bebida.jpg';

const Products = () => (
  <div className="products-container">
    <Header />
    <div className="container-cards">
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
      <div className="card">
        <img src={imgBebida} alt="Bebida"/>
        <h4>Whisky Jack Daniels 1L</h4>
        <p>R$ 151,90</p>
      </div>
    </div>
    <Footer />
  </div>

);

export default Products;