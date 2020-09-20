import React from "react";
import styles from "./HireSlide.scss"
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input} from 'reactstrap'

class HireSlide extends React.Component {
    state = {
        name: '',
        email: '',
        landing: false,
        shop: false,
        html: false,
        app: false,
        design: false,
        job: false,
        other: false,
        isMessageSent: false,
        isErrorOccured: false,
        isPending: false
    }
    handleSubmit(e) {
        this.setState({isMessageSent: true})
        this.setState({isPending: true})
        e.preventDefault()
        
        let templateParams = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: 'kisikMisik',
            landing: this.state.landing,
            shop: this.state.shop,
            html: this.state.html,
            app: this.state.app,
            design: this.state.design,
            job: this.state.job,
            other: this.state.other
        }
        emailjs.send(
            '1133',
            'template_hvpnj0l',
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
            landing: false,
            shop: false,
            html: false,
            app: false,
            design: false,
            job: false,
            other: false 
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }

    render () {
        return (
            <section id='slide-4' className="hire-me slide slide--4">
                <h2 className="visually-hidden">Hire me to make a website or webapp for you or your business</h2>
                <form onSubmit={this.handleSubmit.bind(this)} className="hire-me__form">
                    <p className="hire-me__question">You want me to do</p>
                    <div className="hire-me__work-type-wrapper">
                        <label className="hire-me__work hire-me__work--landing button">
                            <input checked={this.state.landing} onChange={this.handleChange.bind(this, "landing")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Landing page</span>
                        </label>
                        <label className="hire-me__work hire-me__work--shop button">
                            <input checked={this.state.shop} onChange={this.handleChange.bind(this, "shop")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Online shop</span>
                        </label>
                        <label className="hire-me__work hire-me__work--html button">
                            <input checked={this.state.html} onChange={this.handleChange.bind(this, "html")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Semantic HTML</span>
                        </label>
                        <label className="hire-me__work hire-me__work--app button">
                            <input checked={this.state.app} onChange={this.handleChange.bind(this, "app")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Web application</span>
                        </label>
                        <label className="hire-me__work hire-me__work--design button">
                            <input checked={this.state.design} onChange={this.handleChange.bind(this, "design")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">UI/UX design</span>
                        </label>
                        <label className="hire-me__work hire-me__work--job button">
                            <input checked={this.state.job} onChange={this.handleChange.bind(this, "job")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Remote ft/pt job</span>
                        </label>
                        <label className="hire-me__work hire-me__work--other button">
                            <input checked={this.state.other} onChange={this.handleChange.bind(this, "other")} type="checkbox" className="visually-hidden"/>
                            <span className="hire-me__work-text">Other</span>
                        </label>
                    </div>
                    <div className="hire-me__bottom-wrapper">
                        <input value={this.state.name} 
                                onChange={this.handleChange.bind(this, "name")} 
                                type="text" 
                                className="hire-me__name" 
                                placeholder="Name" 
                                maxLength="50" 
                                required="true"/>
                        <input value={this.state.email} 
                                type="email" 
                                className="hire-me__email" 
                                placeholder="Email" 
                                maxLength="50" 
                                onChange={this.handleChange.bind(this, "email")}  
                                required="true"/>
                    </div>
                    
                    {this.state.isMessageSent && !this.state.isErrorOccured && !this.state.isPending &&
                    <p className="hire-me__sent">Thanks! I'll answer shortly.</p>}
                    {!this.state.isMessageSent && <button type="submit" className="hire-me__submit">Send request</button>}
                    {this.state.isErrorOccured && <p className="hire-me__error">Error. Try using my contact info.</p>}
                    {this.state.isPending && <p className="hire-me__pending">Sending..</p>}
                </form>
            </section>
        )
    }
    
}

export default HireSlide