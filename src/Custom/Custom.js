import React, { Component } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

class Custom extends Component {

    render() {
        return (
            <div>
                <Header/>
                <p>Custom order page.</p>
                <Footer/>
            </div>

        )
    }

}

export default Custom;