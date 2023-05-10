import * as React from 'react';

type FormProps = {
    formValues: {
            fullName: string,
            emailAddress: string,
            username: string,
            password: string,
            confirmPassword: string
    }
    // handleSubmit: (e: React.MouseEvent) => void
}

function Button( props: FormProps ){

    const { formValues } = props

    return(
        <>
            <button className='btn' type="submit">join</button>
        </>
    )
}

export default Button