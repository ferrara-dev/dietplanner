import React from "react"
import useForm from "../../helpers/hooks/useForm";
import LoginForm from "../component/form/loginForm";
import {useFirebase, isEmpty} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

export default function Login() {
    const [authError, setAuthError] = React.useState(null);
    const dispatch = useDispatch();
    const firebase = useFirebase();

    const auth = useSelector(state => state.firebase.auth);
    const onSubmit = () => {
        firebase.login({email : fields.email, password : fields.password});
    };

    const {fields, handleChange, handleSubmit} = useForm(onSubmit);

    if (!isEmpty(auth))
        return <Redirect to="/home/profile"/>

    return <LoginForm fields={fields} handleChange={handleChange} handleSubmit={handleSubmit} loginError={authError}/>
}