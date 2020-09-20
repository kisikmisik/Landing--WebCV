import React, {useState} from "react";
import styles from "./ContactPopup.scss"
import {useSpring, animated} from 'react-spring';
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input} from 'reactstrap'

class ContactPopup extends React.Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        isMessageSent: false,
        isErrorOccured: false,
        isPending: false
    }
    handleSubmit(e) {
        this.setState({isMessageSent: true})
        this.setState({isPending: true})
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'kisikMisik',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            '1133',
            'template_jqqon65',
            templateParams,
            'user_PN0oibNSmYBjB8S1N6jqO'
        ).then(response => {
            this.setState({isPending: false})
            if (response.status === 200) {
                this.resetForm()
            }
        }).catch (response => {
            this.setState({isPending: false})
            this.setState({isErrorOccured: true})
        })
       
    }
    resetForm() {
        this.setState({isMessageSent: true})
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} id="contact__form" className="contact-popup">
                <div className="contact-popup__wrapper">
                <FormGroup controlId="formBasicEmail">
                    <Label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Your email:</p>
                        <Input type="email"
                               className="contact-popup__email"
                               placeholder="Email address"
                               autoFocus={true}
                               required={true}
                               value={this.state.email}
                               onChange={this.handleChange.bind(this, "email")}
                               maxLength="50"/>
                    </Label>
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                    <Label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Title:</p>
                        <Input type="text" 
                                className="contact-popup__name" 
                                placeholder="Theme" 
                                maxLength="50"
                                required={true}
                                value={this.state.subject}
                                onChange={this.handleChange.bind(this, "subject")}
                                />
                    </Label>   
                </FormGroup> 
                <FormGroup controlId="formBasicMessage">
                    <Label className="contact-popup__input-wrapper">
                        <p className="contact-popup__label">Message:</p>
                        <textarea cols="30" rows="5"
                                  className="contact-popup__message"
                                  placeholder="Type your message.."
                                  maxLength="200"
                                  required={true}
                                  value={this.state.message}
                                  onChange={this.handleChange.bind(this, "message")}/>
                    </Label>
                </FormGroup>
                    
                </div>
            
                {this.state.isMessageSent && !this.state.isErrorOccured && !this.state.isPending &&
                    <p className="contact-popup__sent">Thanks! I'll answer shortly.</p>}
                {!this.state.isMessageSent && <button  type="submit" className="contact-popup__send">Send message</button>}
                {this.state.isErrorOccured && <p className="contact-popup__error">Error. Try using my contact info.</p>}
                {this.state.isPending && <p className="contact-popup__pending">Sending..</p>}
            </Form>
        )

    }
}

export default ContactPopup;
