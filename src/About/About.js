import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './about.css';

class About extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="about-main">
                <p>About page</p>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default About;
