import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import './contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fName: "",
          lName: '',
          phoneNumber: '',
          emailAddress: '',
        }
      }

    render() {
        return (
            <div>
                <Header />
                <h1 className="contact-title">Lets Chat!</h1>
                <div className="contact-desc">
                    <h2>Contact us.</h2>
                    <p>Whatever your question, I’m here to help! I think nothing of spending up to an hour researching my customers needs to help them design their dream wheels. Have a question about a build? What to know more about what we do? Want to schedule an appointment to talk about your wheels in person? You’re in the right place!</p>
                    <Form>
                        <FormGroup>
                            <Label>Name: </Label>
                            <Input type="text" name="f-name" id="firstName" placeholder="First Name" />
                            <Input type="text" name="l-name" id="lastName" placeholder="Last Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Email: </Label>
                            <Input type="email" name="email" id="emailAddress" placeholder="" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Phone Number: </Label>
                            <Input name="phoneNumber" id="phoneNumber" placeholder="" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </div>
                <Footer />
            </div>

        )
    }

}

export default Contact;