import React from "react"
import useForm from "../helpers/hooks/useForm";
import LoginForm from "../view/form/loginForm";
import {useFirebase, isEmpty} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import useFirebaseAuth from "../helpers/hooks/usefirebaseAuth";

export default function Login() {
    const [authError, setAuthError] = React.useState(null);
    const dispatch = useDispatch();
    const firebase = useFirebase();

    const auth = useFirebaseAuth();

    const onSubmit = () => {
        firebase.login({email : fields.email, password : fields.password});
    };

    const {fields, handleChange, handleSubmit} = useForm(onSubmit);

    if (!isEmpty(auth))
        return <Redirect to="/profile/personal"/>

    return <LoginForm fields={fields} handleChange={handleChange} handleSubmit={handleSubmit} loginError={authError}/>
}