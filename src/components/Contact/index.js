import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  //initialize the values of the state - clear input fields
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  //sync internal state of component formState with user input from DOM
  function handleChange(e) {
    //validation
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      //isValid conditional statement
      if (!isValid) {
        setErrorMessage('your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  
    //The name property of target in the preceding expression refers to the name attribute of the form element.
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log('errorMessage', errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }


    return (
        <section>
          <h1 data-testid="h1tag">Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5"  defaultValue={message} onBlur={handleChange}/>
            </div>
            {errorMessage && (
              <div>
                <p className='error-text'>{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section>
      );
}

export default ContactForm;