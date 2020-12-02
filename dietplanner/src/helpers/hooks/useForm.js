// useForm.js custom hook to handle change and submission of forms

import {useState} from 'react'

export default function useForm(onSubmit){
    const [fields, setFields] = useState({});

    const handleSubmit = (event) => {
        if(event)
            event.preventDefault();
        onSubmit();
    }

    const handleChange = (event) => {
        event.preventDefault();
        setFields(fields => ({ ...fields, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        fields
    }
}