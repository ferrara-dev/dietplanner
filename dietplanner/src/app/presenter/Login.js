import React from "react"
import useForm from "../../helpers/hooks/useForm";
import LoginForm from "../component/form/loginForm";
import {useFirebase} from "react-redux-firebase";
import {useDispatch} from "react-redux";
import {loginUser} from "../../actions/user";
import {useHistory} from "react-router-dom"
export default function Login() {
    const [authError, setAuthError] = React.useState(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = () => {
            dispatch(loginUser(fields.email, fields.password));
            history.push("/home/profile");

    };

    const {fields, handleChange, handleSubmit} = useForm(onSubmit);

    return <LoginForm fields={fields} handleChange={handleChange} handleSubmit={handleSubmit} loginError={authError}/>
}