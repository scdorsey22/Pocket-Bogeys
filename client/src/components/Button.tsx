import * as React from 'react';

type FormProps = {
    fullName: string,
    emailAddress: string,
    username: string,
    password: string,
    confirmPassword: string
}

function Button( formValues: FormProps ){

    const {fullName, emailAddress, username, password, confirmPassword} = formValues

    function handleClick(e: any){
        e.preventDefault()
        console.log(fullName, emailAddress, username, password, confirmPassword)
    }

    return(
        <>
            <button className='btn' formAction='submit' onClick={handleClick}>join</button>
        </>
    )
}

export default Button