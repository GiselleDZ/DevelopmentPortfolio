import React, { Component } from "react"
import emailjs from 'emailjs-com'

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

// Form validation
const formValid = ({ formErrors, ...rest }) => {
    let valid = true

    // Validate form errors being empty
    Object.values(formErrors).forEach((val) => {
        val.length > 0 && (valid = false)
    })

    // Validate the form was filled out
    Object.values(rest).forEach((val) => {
        val === '' && (valid = false)
    })

    return valid
}

export default class ContactPop extends Component {
    constructor(props) {

        super(props)

        this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        formErrors: {
            name: '',
            email: '',
            subject: '',
            message: '',
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
    
        if (formValid(this.state)) {
        // Handle form validation success
        const { name, email, subject, message } = this.state
    
        // Set template params
        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }

        emailjs.send('service_w5eoino', 'template_o92s2as', templateParams, 'user_EIa0SEKr06VePcoRzBkwW')

        alert(`Thanks, ${name}! I forwaded your message to Giselle. You'll receive an e-mail confirmation shortly`)
    
        console.log(`
            --SUBMITTED--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `)
    
        this.resetForm()
        } else {
        // Handle form validation failure
        console.error('There was an error submitting the contact form, please check all fields are filled and try again.')
        alert('There was an error submitting your message. Please check the form and try again. If the error persists, let me know! gz@gisellezatonyl.com ')
        }
    }
    
    // Function to reset form
    resetForm() {
        this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
        })
    }
    
    handleChange(e){
        e.preventDefault()
        const { name, value } = e.target

        let formErrors = { ... this.state.formErrors }
    
        switch (name) {
        case 'name':
            formErrors.name = value.length < 1 ? "What's your name?" : ''
            break
        case 'email':
            formErrors.email = emailRegex.test(value) ? "What e-mail can we use to get in touch?" : "What e-mail can we use to get in touch?"
            break
        case 'subject':
            formErrors.subject = value.length < 1 ? "What's your message about?" : ''
            break
        case 'message':
            formErrors.message = value.length < 1 ? "Type your message in the text box above this line" : ''
            break
        default:
            break
        }
        this.setState({ formErrors, [name]: value })
    }
    
    render() {
        const { formErrors} = this.state
    
        return (
            <section className="popup" id="contactpopup">
                <div className='popup__content'>
                    <div className="row">
                        <div className="col-1of2">
                            <img src="public\assets\imgs\misc-bckg.png" alt="3D landscape with 3D engine grid" className="popup__image"/>
                        </div>
                        <div className="col-1of2">
                            <a href='#footer' className="popup__close">&times;</a>
                            <br></br>
                            <h2 className="popup__header heading-secondary heading-secondary--light">
                                Hit me up!
                            </h2>
                            <form id='popup' onSubmit={this.handleSubmit} noValidate>
                                <input
                                    type='text'
                                    name='name'
                                    value={this.state.name}
                                    className={`popup__control popup__input paragraph ${formErrors.name.length > 0 ? 'popup__error' : null}`}
                                    onChange={this.handleChange}
                                    placeholder='Name'
                                    noValidate
                                ></input>
                                {formErrors.name.length > 0 && (
                                    <span className='popup__error-message paragraph'>{formErrors.name}</span>
                                )}

                                <input
                                    type='email'
                                    name='email'
                                    value={this.state.email}
                                    className={`popup__control popup__input paragraph ${formErrors.email.length > 0 ? 'error' : null}`}
                                    onChange={this.handleChange}
                                    placeholder='Email'
                                    noValidate
                                ></input>
                                {formErrors.email.length > 0 && (
                                    <span className='popup__error-message paragraph'>{formErrors.email}</span>
                                )}
                    


                                <input
                                    type='subject'
                                    name='subject'
                                    value={this.state.subject}
                                    className={`popup__control popup__input paragraph ${
                                    formErrors.subject.length > 0 ? 'error' : null
                                    }`}
                                    onChange={this.handleChange}
                                    placeholder='Subject'
                                    noValidate
                                ></input>
                                {formErrors.subject.length > 0 && (
                                    <span className='popup__error-message paragraph'>{formErrors.subject}</span>
                                )}



                                <textarea
                                    rows='5'
                                    name='message'
                                    value={this.state.message}
                                    className={`popup__control popup__input paragraph ${
                                    formErrors.message.length > 0 ? 'error' : null
                                    }`}
                                    onChange={this.handleChange}
                                    placeholder='Message'
                                    noValidate
                                ></textarea>

                                {formErrors.message.length > 0 && (
                                    <span className='popup__error-message paragraph'>{formErrors.message}</span>
                                )}
                                <br></br>
                                <button className='btn btn--white popup__button' type='submit'>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


{/* <section className="popup" id="contactpopup">
<div className="popup__content">
        <img src="public\assets\imgs\misc-bckg.png" alt="3D landscape with engine grid" className="popup__image"/>
        <a href="#footer" className="popup__close">&times;</a>
        <div className="popup__text">
            <h3 className="heading-tertiary heading-tertiary--light">
                Please e-mail gisellezatonyl@gmail.com
            </h3>

        </div>
    </div>
</ section> */}