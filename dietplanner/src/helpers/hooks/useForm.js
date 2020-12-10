// useForm.js custom hook to handle change and submission of forms
import {useState, useRef} from 'react'
import SimpleReactValidator from "simple-react-validator";

export default function useForm(onSubmit){
    const [fields, setFields] = useState({});
    const [validator,setValidator] = useState(new SimpleReactValidator());

    const handleSubmit = (event) => {
        if(event)
            event.preventDefault();
        onSubmit();
    };

    const handleChange = (event) => {
        event.preventDefault();
        setFields(fields => ({ ...fields, [event.target.name]: event.target.value }));
        validator.showMessageFor(event.target.name);
    };

    function validateFormFields(formFields){
        return Object.keys(formFields).some(field => {
            const invalid = !validator.fieldValid(field);
            if(invalid){
                return true;
            }
        })
    };

    return {
        handleChange,
        handleSubmit,
        fields,
        validator,
        validateFormFields
    }
}