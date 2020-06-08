import React from 'react';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ondeImg from '../assets/1.svg';
import favoritasImg from '../assets/2.svg';
import facilitaImg from '../assets/3.svg';

const Home = () => (
    <div className="home-container">
        <Header />

        <div className="search-container">
            <h1>Bebidas geladas a preço de <br />
                mercado na sua casa agora</h1>

            <form>
                <input placeholder="Digite seu endereço"></input>
                <Link href="/products"><button type="button"> > </button></Link>
            </form>
        </div>
        <div className="como-funciona">
            <h1>Como funciona?</h1>
            <div className="icons-info">
                <div className="informacoes">
                    <img src={ondeImg}></img>
                    <h2>Onde você estiver</h2>
                </div>
                <div className="informacoes">
                    <img src={favoritasImg}></img>
                    <h2>Só as favoritas</h2>
                </div>
                <div className="informacoes">
                    <img src={facilitaImg}></img>
                    <h2>Facilita seu brinde</h2>
                </div>

            </div>

        </div>
        <Footer />
    </div>
    
);

export default Home;