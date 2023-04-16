import * as React from 'react';

type FormProps = {
    fullName: string,
    emailAddress: string,
    username: string,
    password: string,
    confirmPassword: string
}

function Button({}){

    // const {formValues} = FormProps

    // function handleClick(){
    //     console.log(formValues)
    // }

    return(
        <>
            <button className='btn' formAction='submit' >join</button>
        </>
    )
}

export default Button