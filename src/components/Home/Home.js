import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <p>Home page, Dawg.</p>
                <Footer/>
            </div>

        )
    }

}

export default Home;