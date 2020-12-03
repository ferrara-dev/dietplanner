import SignupForm from "../component/form/signup/signupForm";
import useForm from "../../helpers/hooks/useForm";
import usePages from "../../helpers/hooks/usePages";
import {useDispatch} from "react-redux";
import {registerUser} from "../../actions/user";

export default function Signup() {
    const dispatch = useDispatch();

    function register() {
        const {firstName, lastName, email, password, age, gender, weight, height, activityLevel} = fields;
        const userProfile = {firstName, lastName, email, age, gender, weight, height, activityLevel};
        dispatch(registerUser(email, password, userProfile));
        console.log(fields);
    }

    const {fields, handleChange} = useForm();
    const {activeStep, handleNext, handleBack} = usePages(register, 2);

    return <SignupForm activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} fields={fields}
                       handleChange={handleChange} afterLastStep={register}/>
}