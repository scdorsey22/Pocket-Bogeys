import * as React from 'react'
import Button from './Button.tsx'

const defaultValues = {
  fullName: '',
  emailAddress: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const Signup = (): JSX.Element => {

  const [formValues, setFormValues] = React.useState(defaultValues)
  const [showPassword, setShowPassword] = React.useState<Boolean>(false)

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement
    setFormValues({ ...formValues, [name]: value })

    if (e.target.getAttribute('name') === 'password' || e.target.getAttribute('name') === 'confirmPassword'){
      if ((document.querySelector('.password') as HTMLInputElement).value === (document.querySelector('.confirm-password') as HTMLInputElement).value){
        (document.querySelector('.error-msg') as HTMLElement)!.style.visibility = 'hidden'
        document.querySelectorAll<HTMLInputElement>('.match-error')!.forEach((element) => {
            element.style.border = '1px solid #1A4D3F'
        })
      } else {
        (document.querySelector('.error-msg') as HTMLElement)!.style.visibility = 'visible'
        document.querySelectorAll<HTMLInputElement>('.match-error')!.forEach((element) => {
          element.style.border = '1px solid red'
        })
        
      }
    }
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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    formValues.password === formValues.confirmPassword ? 
      console.log(formValues) // route to home page with session for user
      : 

      console.log('error on login')
  }

    return (
      <>
        <section className="section-signup">
          <div className="wrap">
            <div className="form-wrapper">
              <form action="submit" className="form-signup" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <input type="text" className="input-signup full-name" name='fullName' onChange={handleChange} required />
                  <span>Full Name</span>
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input-signup email-address" name='emailAddress' onChange={handleChange} required />
                  <span>Email Address</span>
                </div>
                <div className="input-wrapper">
                  <input type="text" className="input-signup username" name='username' onChange={handleChange} required />
                  <span>Username</span>
                </div>
                <div className="input-wrapper">
                  <input type="password" className="input-signup password match-error" name='password' onChange={handleChange} required />
                  <span>Password</span>
                </div>
                <div className="input-wrapper">
                  <input type="password" className="input-signup confirm-password match-error" name='confirmPassword' onChange={handleChange} required />
                  <span>Confirm Password</span>
                </div>
                <p className='error-msg'>Passwords must match</p>
                <Button formValues={formValues} />
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