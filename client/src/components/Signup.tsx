import * as React from 'react';
import Button from './Button.tsx'

const defaultValues = {
  fullName: '',
  emailAddress: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const Signup= (): JSX.Element => {

  const [formValues, setFormValues] = React.useState(defaultValues) 
  const [showPassword, setShowPassword] = React.useState<Boolean>(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
    const inputFields = document.querySelectorAll<HTMLInputElement>('.match-error')
    if (showPassword){
      inputFields.forEach((inputField) => inputField.type = 'password')
    } else {
      inputFields.forEach((inputField) => inputField.type = 'text')
    }
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    formValues.password === formValues.confirmPassword ? 
      console.log(formValues) // route to home page with session for user
      : 
      document.querySelectorAll<HTMLInputElement>('.match-error')!.forEach((element) => {
        element.style.border = '2px solid red'
        element.addEventListener('input', () => {
          element.style.border = '1px solid #1A4D3F'
        })
      })
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
                  <input type="password" className="input-signup password match-error" name='password' onChange={handleChange}/>
                  <span>Password</span>
                </div>
                <div className="input-wrapper">
                  <input type="password" className="input-signup confirm-password match-error" name='confirmPassword' onChange={handleChange}/>
                  <span>Confirm Password</span>
                </div>
                <button onClick={handleClick}>test in console</button>
                <Button formValues={formValues}/>
              </form>
              <input type="checkbox" name='show-password' onInput={handleShowPassword}/>
              <label htmlFor="show-password">Show Password</label>
            </div>
          </div>
        </section>
      </>
    )
}

export default Signup;