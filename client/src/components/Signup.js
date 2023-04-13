import React, { useState } from 'react'

const defaultValues = {
    name: '',
    username: '',
    email: '',
    password: ''
}

const Signup = () => {

    const [formValues, setFormValues] = useState(defaultValues)
    const [showPass, setShowPass] = useState(false)



    return (
        <div>test</div>
    )
}

export default Signup;