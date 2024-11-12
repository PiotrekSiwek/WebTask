import './index.css';
import Heading from "../../components/heading";
import Text from '../../components/text';
import FormInput from '../../components/formInput';
import { useState } from "react";


export const Contact = () => {

  const initialState = {firstName: '', lastName:'', phoneNumber: '', service:''};
  const initialErrors = {firstName: false, lastName: false, phoneNumber: false, service: false};

  const contactTexts = {
      header: 'Contact',
      text: 'Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours'
  }
  const errorTexts = {
        name: '* Require minimum 2 characters',
        required: '* Required',
  }

  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onFormChange = (e) => {
      const {name, value} = e.target
      setFormState({...formState, [name]: value});
      setFormErrors({...formErrors, [name]: false});
  }

  const handleSubmit = () => {
      let isValid = true;
      let firstNameError = false;
      let lastNameError = false;
      let phoneNumberError = false;
      let serviceError = false;
      if (formState.firstName.trim().length < 2 ){
          isValid = false
          firstNameError = true
      }
      if (formState.lastName.trim().length < 2 ){
          isValid = false
          lastNameError = true
      }
      if (formState.phoneNumber.trim().length === 0 ){
          isValid = false
          phoneNumberError = true
      }
      if (formState.service.trim().length === 0 ){
          isValid = false
          serviceError = true
      }
      if (isValid){
          simulateApiResponse();
          setFormState(initialState);
      } else {
          setFormErrors({
              firstName: firstNameError,
              lastName: lastNameError,
              phoneNumber: phoneNumberError,
              service: serviceError
          })
      }
  }

    const simulateApiResponse = () => {
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000);
    }

  return (
    <div className='contact'>
        <div className='container'>
            <div className='content'>
                <Heading level={2} color='#000000'>
                {contactTexts.header}
                </Heading>
                <Text color='#000000'>
                {contactTexts.text}
                </Text>
            </div>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <div>
                    <FormInput
                        id='contact-first-name'
                        name='firstName'
                        type='text'
                        placeholder='First Name'
                        value={formState.firstName}
                        error={formErrors.firstName}
                        helperText={errorTexts.name}
                        onChange={onFormChange}
                        disabled={isSubmitted}
                    />
                    <FormInput
                        id='contact-last-name'
                        name='lastName'
                        type='text'
                        placeholder='Last Name'
                        value={formState.lastName}
                        error={formErrors.lastName}
                        helperText={errorTexts.name}
                        onChange={onFormChange}
                        disabled={isSubmitted}
                    />
                </div>
                <div>
                    <FormInput
                        id='contact-phone-number'
                        name='phoneNumber'
                        style='full'
                        type='number'
                        placeholder='Phone Number'
                        value={formState.phoneNumber}
                        error={formErrors.phoneNumber}
                        helperText={errorTexts.required}
                        onChange={onFormChange}
                        disabled={isSubmitted}
                    />
                    <FormInput
                        id='contact-service'
                        name='service'
                        style='full'
                        type='text'
                        placeholder='What Service are you interested in?'
                        value={formState.service}
                        error={formErrors.service}
                        helperText={errorTexts.required}
                        onChange={onFormChange}
                        disabled={isSubmitted}
                    />
                </div>
                <button
                    className={isSubmitted ? 'formButton submitted' :'formButton'}
                    type='submit'
                    onClick={handleSubmit}
                >{isSubmitted ? 'SUBMITTED' : 'SUBMIT NOW' }
                </button>
            </form>
        </div>
    </div>
  )
};

export default Contact;
