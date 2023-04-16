import * as React from 'react';
import Button from './Button.tsx'

const defaultValues = {
  fullName: '',
  emailAddress: '',
  username: '',
  password: '',
  confirmPassword: ''
}

function Signup() {

  const [formValues, setFormValues] = React.useState(defaultValues) 

  const handleChange = (e: any) => {
      const { name, value } = e.target
      setFormValues({ ...formValues, [name]: value })
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    formValues.password === formValues.confirmPassword 
    ? console.log(formValues) 
    : console.log('passwords do not match')
  }


    return (
      <>
        <section className="section-signup">
          <div className="wrap">
            <div className="form-wrapper">
              <form action="submit" className="form-signup">
                <div className="input-wrapper">
                  <input type="text" className="input-signup full-name" name='fullName' onChange={handleChange}/>
                  <span>Full Name</span>
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input-signup email-address" name='emailAddress' onChange={handleChange}/>
                  <span>Email Address</span>
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input-signup username" name='username' onChange={handleChange}/>
                  <span>Username</span>
                </div>
                <div className="input-wrapper">
                  <input type="password" className="input-signup password" name='password' onChange={handleChange}/>
                  <span>Password</span>
                </div>
                <div className="input-wrapper">
                  <input type="password" className="input-signup confirm-password" name='confirmPassword' onChange={handleChange}/>
                  <span>Confirm Password</span>
                </div>
                <button onClick={handleClick}>test in console</button>
                <Button />
              </form>
            </div>
          </div>
        </section>
      </>
    )
}

export default Signup;