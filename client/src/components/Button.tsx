import * as React from 'react';

type FormProps = {
    formValues: {
            fullName: string,
            emailAddress: string,
            username: string,
            password: string,
            confirmPassword: string
    }
}

function Button( props: FormProps ){

    const { formValues } = props
    const { fullName, emailAddress, username, password, confirmPassword } = formValues

    function handleClick(e: React.MouseEvent){
        e.preventDefault()
        console.log(props)
        console.log(formValues)
        console.log(fullName, emailAddress, username, password, confirmPassword)
    }

    return(
        <>
            <button className='btn' formAction='submit' onClick={handleClick}>join</button>
        </>
    )
}

export default Button